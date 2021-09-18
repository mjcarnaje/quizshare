import {
  Entity,
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { User, Quiz } from ".";
import { Field } from "type-graphql";

@Entity()
export class Bookmark extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quizId: string;

  @Field()
  @Column()
  userId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.likes, { cascade: true })
  quiz: Quiz;

  @ManyToOne(() => User, (user) => user.likes, { cascade: true })
  user: User;
}
