import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Tag {
  @Field(() => String)
  @PrimaryColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => Quiz, (quiz) => quiz.tags)
  quiz: Quiz[];
}
