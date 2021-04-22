import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Question } from "./Question";

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  authorId: string;

  @Field()
  @ManyToOne(() => User, (user) => user.quizzes)
  @JoinColumn({ name: "authorId", referencedColumnName: "id" })
  author: User;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  quizPhoto?: string;

  @Field(() => [Question])
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
