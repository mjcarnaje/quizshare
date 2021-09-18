import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Quiz, User } from ".";
import { Field } from "type-graphql";

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.likes, { onDelete: "CASCADE" })
  quiz: Quiz;

  @Field()
  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;
}
