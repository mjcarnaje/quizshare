import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quiz } from ".";
import { Maybe } from "../types/index";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column("text", { unique: true })
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  tagPhoto: Maybe<string>;

  @ManyToMany(() => Quiz, (quiz) => quiz.tags)
  quiz: Quiz[];
}
