import { Field, ObjectType, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Quiz } from "./Quiz";
import { GraphQLJSONObject } from "graphql-type-json";

@ObjectType()
@Entity()
export class Question extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  @JoinColumn({ name: "quizId", referencedColumnName: "id" })
  quiz: Quiz;

  @Field()
  @Column()
  question: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  questionPhoto?: string;

  @Field(() => [GraphQLJSONObject])
  @Column("jsonb")
  choices: { id: string; text: string; choicePhoto?: string }[];

  @Field()
  @Column()
  answer: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  explanation?: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  hint?: string;
}
