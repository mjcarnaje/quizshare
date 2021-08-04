import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Quiz, User } from ".";

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
