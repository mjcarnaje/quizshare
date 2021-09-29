import { Field } from "type-graphql";
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Quiz, User } from ".";

@Entity()
export class Like extends BaseEntity {
  @Field()
  @PrimaryColumn()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.likes, { onDelete: "CASCADE" })
  @JoinColumn()
  quiz: Quiz;

  @Field()
  @PrimaryColumn()
  userId: string;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn()
  user: User;
}
