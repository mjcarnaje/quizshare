import { Field, ObjectType, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Quiz, User } from ".";

@ObjectType()
@Entity()
export class Score extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  quiz: Quiz;

  @ManyToOne(() => User, (user) => user.scores)
  user: User;

  @Field(() => Int)
  totalItems: number;

  @Field(() => Int)
  @Column()
  score: number;

  @Field(() => String)
  @CreateDateColumn()
  answered: Date;
}
