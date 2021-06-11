import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Result extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  @JoinColumn({ name: "quizId", referencedColumnName: "id" })
  quiz: Quiz;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description?: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  resultPhoto?: string;

  @Field(() => Int)
  @Column()
  minimumPassingPercentage: number;
}
