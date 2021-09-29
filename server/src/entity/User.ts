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
import { Follow } from "./Follow";
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

  @Index({ fulltext: true })
  @Field(() => String)
  @Column("text")
  firstName: string;

  @Index({ fulltext: true })
  @Field(() => String, { nullable: true })
  @Column("text", { nullable: true })
  lastName: Maybe<string>;

  @Field(() => String, { nullable: true })
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

  @OneToMany(() => Follow, (follow) => follow.followed)
  followed: Follow[];

  @OneToMany(() => Follow, (follow) => follow.follower)
  followers: Follow[];

  @Field(() => Int)
  @Column({ default: 0 })
  followedCount: number;

  @Field(() => Int)
  @Column({ default: 0 })
  followerCount: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Boolean)
  isFollowed: boolean;
}
