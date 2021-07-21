import { GraphQLJSONObject } from "graphql-type-json";
import { Gender } from "../types/types";
import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Quiz, Like, Bookmark, Comment } from ".";
import { Subscription } from "./Subscription";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  googleId: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  facebookId: string;

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

  @OneToMany(() => Quiz, (quiz) => quiz.author)
  quizzes: Quiz[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];

  @OneToMany(() => Comment, (comment) => comment.quiz)
  comments: Comment[];

  @OneToMany(() => Subscription, (subscription) => subscription.followed)
  followed: Subscription[];

  @OneToMany(() => Subscription, (subscription) => subscription.follower)
  followers: Subscription[];

  @Field(() => Int)
  @Column({ default: 0 })
  followedCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  followerCount: number;

  @Field(() => Boolean)
  isFollowed: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
