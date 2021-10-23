import { Field, ObjectType, Int, Float, ID } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quiz, User } from ".";

@ObjectType()
@Entity()
export class Score extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Int)
  @Column("int")
  totalItems: number;

  @Field(() => Int)
  @Column("int")
  score: number;

  @Field(() => Float)
  @Column("float", { default: 0 })
  percentage: number;

  @Field()
  @CreateDateColumn()
  answered: Date;

  @Field()
  @Column()
  authorId: string;

  @Field()
  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.takers, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  quiz: Quiz;

  @Field()
  @Column()
  takerId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.takers)
  @JoinColumn()
  taker: User;

  @BeforeInsert()
  setPercentage() {
    this.percentage = (this.score / this.totalItems) * 100;
  }
}
