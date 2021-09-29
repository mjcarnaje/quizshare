import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Quiz, User } from ".";

@Entity()
export class Bookmark extends BaseEntity {
  @PrimaryColumn()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.likes, { onDelete: "CASCADE" })
  @JoinColumn()
  quiz: Quiz;

  @PrimaryColumn()
  userId: string;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn()
  user: User;
}
