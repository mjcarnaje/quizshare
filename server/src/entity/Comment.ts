import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Quiz, User } from ".";

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  text: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.comments, { onDelete: "CASCADE" })
  @JoinColumn()
  quiz: Quiz;

  @Field()
  @Column()
  authorId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn()
  author: User;

  @Field(() => Boolean)
  isMine: boolean;
}
