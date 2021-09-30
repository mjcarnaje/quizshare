import { Maybe } from "../types";
import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Bookmark, Comment, Like, Question, Result, Tag, User, Score } from ".";

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  authorId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.quizzes)
  @JoinColumn()
  author: User;

  @Index({ fulltext: true })
  @Field()
  @Column()
  title: string;

  @Index({ fulltext: true })
  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  quizPhoto: Maybe<string>;

  @Field(() => [Question])
  @OneToMany(() => Question, (question) => question.quiz, { cascade: true })
  questions: Question[];

  @Field(() => [Result])
  @OneToMany(() => Result, (result) => result.quiz, { cascade: true })
  results: Result[];

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.quiz, { cascade: true })
  @JoinTable()
  tags: Tag[];

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;

  @OneToMany(() => Like, (like) => like.quiz)
  likes: Like[];

  @OneToMany(() => Bookmark, (bookmark) => bookmark.quiz)
  bookmarks: Bookmark[];

  @OneToMany(() => Comment, (comment) => comment.quiz)
  comments: Comment[];

  @OneToMany(() => Score, (score) => score.quiz)
  takers: Score[];

  @Field(() => Int)
  @Column({ default: 0 })
  questionCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  likeCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  commentCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  bookmarkCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  takerCount: number;

  @Field(() => Boolean)
  isMine: boolean;

  @Field(() => Boolean)
  isLiked: boolean;

  @Field(() => Boolean)
  isBookmarked: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
