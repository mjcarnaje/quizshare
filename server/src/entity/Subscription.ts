import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from ".";

@ObjectType()
@Entity()
export class Subscription extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  followedId: string;

  @Field(() => String)
  @Column()
  followerId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.followers, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  follower: User;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.followed, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  followed: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
