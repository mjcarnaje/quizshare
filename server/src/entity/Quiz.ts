import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Question } from "./Question";
import { Result } from "./Result";
import { Tag } from "./Tag";
import { User } from "./User";

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  authorId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.quizzes)
  @JoinColumn({ name: "authorId", referencedColumnName: "id" })
  author: User;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  quizPhoto?: string;

  @Field(() => [Question], { nullable: true })
  @OneToMany(() => Question, (question) => question.quiz, {
    cascade: true,
    nullable: true,
  })
  questions: Question[];

  @Field(() => [Result], { nullable: true })
  @OneToMany(() => Result, (result) => result.quiz, {
    cascade: true,
    nullable: true,
  })
  results: Result[];

  @Field(() => [Tag], { nullable: true })
  @ManyToMany(() => Tag, (tag) => tag.quiz, {
    cascade: true,
    nullable: true,
  })
  @JoinTable()
  tags: Tag[];

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
