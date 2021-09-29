import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Quiz } from ".";
import { Maybe } from "../types";

@ObjectType()
@Entity()
export class Result extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  resultPhoto: Maybe<string>;

  @Field(() => Int)
  @Column("int")
  minimumPercent: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  quiz: Quiz;
}
