import { GraphQLJSONObject } from "graphql-type-json";
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Quiz } from ".";
import { Maybe } from "../types";

@ObjectType()
@Entity()
export class Question extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  quiz: Quiz;

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
}
