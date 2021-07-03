import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => Quiz, (quiz) => quiz.tags)
  quiz: Quiz[];
}
