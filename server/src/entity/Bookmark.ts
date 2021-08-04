import { Entity, BaseEntity, ManyToOne, PrimaryColumn, Column } from "typeorm";
import { User, Quiz } from ".";

@Entity()
export class Bookmark extends BaseEntity {
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
