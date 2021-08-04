import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Quiz } from ".";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  tagPhoto: string | null;

  @ManyToMany(() => Quiz, (quiz) => quiz.tags)
  quiz: Quiz[];
}
