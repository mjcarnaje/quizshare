import { GraphQLJSONObject } from "graphql-type-json";
import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Gender } from "../types/types";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  googleId: string;

  @Field()
  @Column("text", { unique: true })
  username: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column({ nullable: true })
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

  @Field({ nullable: true })
  @Column("date", { nullable: true })
  birthday: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
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
