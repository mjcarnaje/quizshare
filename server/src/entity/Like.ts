import { Entity, BaseEntity, ManyToOne, PrimaryColumn, Column } from "typeorm";
import { User } from "./User";
import { Quiz } from "./Quiz";

@Entity()
export class Like extends BaseEntity {
  @PrimaryColumn()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.likes, {
    onDelete: "CASCADE",
  })
  quiz: Quiz;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;
}
