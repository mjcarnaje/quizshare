import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from ".";

@ObjectType()
@Entity()
export class Follow extends BaseEntity {
  @Field()
  @PrimaryColumn()
  followedId: string;

  @ManyToOne(() => User, (user) => user.followed, { cascade: true })
  @JoinColumn()
  followed: User;

  @Field()
  @PrimaryColumn()
  followerId: string;

  @ManyToOne(() => User, (user) => user.followers, { cascade: true })
  @JoinColumn()
  follower: User;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
