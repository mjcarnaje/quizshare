import { GraphQLJSONObject } from "graphql-type-json";
import { Field, ObjectType } from "type-graphql";
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
export class Question extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
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
