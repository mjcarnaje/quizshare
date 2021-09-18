import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quiz } from ".";
import { Maybe } from "../types";

@ObjectType()
@Entity()
export class Result extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  quiz: Quiz;

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
  @Column()
  minimumPercent: number;
}
