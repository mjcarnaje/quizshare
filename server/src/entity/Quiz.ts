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
import { Question } from "./Question";
import { Result } from "./Result";
import { Tag } from "./Tag";
import { User } from "./User";

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
  questionsLength: number;

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

  @Field(() => Boolean)
  isMine: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
