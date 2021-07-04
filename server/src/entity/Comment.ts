import {
  Entity,
  BaseEntity,
  ManyToOne,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Quiz } from "./Quiz";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.comments, {
    onDelete: "CASCADE",
  })
  quiz: Quiz;

  @Column()
  authorId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.comments)
  author: User;

  @Field(() => String)
  @Column()
  text: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
