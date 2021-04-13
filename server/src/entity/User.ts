import { Gender } from "../types/types";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GraphQLJSONObject } from "graphql-type-json";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("text", { unique: true })
  username: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  coverPhoto?: string;

  @Field()
  @Column("text")
  firstName: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  lastName?: string;

  @Field()
  @Column("date")
  birthday: string;

  @Field()
  @Column("text")
  gender: Gender;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  country?: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  bio?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @Column("jsonb", { nullable: true })
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
