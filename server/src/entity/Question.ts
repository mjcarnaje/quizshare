import { GraphQLJSONObject } from "graphql-type-json";
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Quiz } from ".";
import { Maybe } from "../types";

@ObjectType()
@Entity()
export class Question extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  question: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  questionPhoto: Maybe<string>;

  @Field(() => [GraphQLJSONObject])
  @Column("jsonb")
  choices: { id: string; text: string; choicePhoto: Maybe<string> }[];

  @Field()
  @Column()
  answer: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  explanation: Maybe<string>;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  hint: Maybe<string>;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  quiz: Quiz;
}
