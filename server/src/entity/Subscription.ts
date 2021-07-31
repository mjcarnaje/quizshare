import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from ".";
import { Column } from "typeorm";

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
