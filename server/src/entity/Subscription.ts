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
  @ManyToOne(() => User, (user) => user.followers, { cascade: true })
  follower: User;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.followed, { cascade: true })
  followed: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
