import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Bookmark, Comment, Like, Question, Result, Tag, User } from ".";

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
  @JoinColumn({ name: "authorId", referencedColumnName: "id" })
  author: User;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  quizPhoto?: string;

  @Field(() => [Question])
  @OneToMany(() => Question, (question) => question.quiz, {
    cascade: true,
  })
  questions: Question[];

  @Field(() => Int)
  @Column({ default: 0 })
  questionCount: number;

  @Field(() => [Result])
  @OneToMany(() => Result, (result) => result.quiz, {
    cascade: true,
  })
  results: Result[];

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.quiz, {
    cascade: true,
  })
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

  @Field(() => Int)
  @Column({ default: 0 })
  likeCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  commentCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  bookmarkCount: number;

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
