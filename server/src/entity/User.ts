import { GraphQLJSONObject } from "graphql-type-json";
import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Quiz, Like, Bookmark, Comment } from ".";
import { Subscription } from "./Subscription";
import { UserRole, Gender, Maybe } from "../types";
import { Score } from "./Score";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  googleId: Maybe<string>;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  facebookId: Maybe<string>;

  @Field()
  @Index({ fulltext: true })
  @Column("text", { unique: true })
  username: string;

  @Field()
  @Index({ fulltext: true })
  @Column("text", { unique: true })
  email: string;

  @Column("text", { nullable: true })
  password: Maybe<string>;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  avatar: Maybe<string>;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  coverPhoto: Maybe<string>;

  @Field(() => String)
  @Index({ fulltext: true })
  @Column("text")
  firstName: string;

  @Field(() => String, { nullable: true })
  @Index({ fulltext: true })
  @Column("text", { nullable: true })
  lastName: Maybe<string>;

  @Field(() => Date, { nullable: true })
  @Column("date", { nullable: true })
  birthday: Date;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  gender: Maybe<Gender>;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  country: Maybe<string>;

  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  bio: Maybe<string>;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @Column("jsonb", { nullable: true })
  social: Maybe<{
    facebook: Maybe<string>;
    twitter: Maybe<string>;
    instagram: Maybe<string>;
    youtube: Maybe<string>;
  }>;

  @Field(() => UserRole)
  @Column({ type: "enum", enum: UserRole })
  role: UserRole;

  @OneToMany(() => Quiz, (quiz) => quiz.author)
  quizzes: Quiz[];

  @OneToMany(() => Score, (score) => score.taker)
  takers: Score[];

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
