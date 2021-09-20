import { Field, ObjectType, Int, Float } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quiz, User } from ".";

@ObjectType()
@Entity()
export class Score extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  quizAuthorId: string;

  @Field()
  @Column()
  quizId: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.takers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  quiz: Quiz;

  @Field()
  @Column()
  takerId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.takers)
  taker: User;

  @Field(() => Int)
  @Column()
  totalItems: number;

  @Field(() => Int)
  @Column()
  score: number;

  @Field(() => Float)
  @Column("float", { default: 0 })
  percentage: number;

  @Field(() => String)
  @CreateDateColumn()
  answered: Date;

  @BeforeInsert()
  setPercentage() {
    this.percentage = (this.score / this.totalItems) * 100;
  }
}
