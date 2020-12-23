import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './Quiz';
import { User } from './User';

@ObjectType()
@Entity()
export class Like extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.likes)
	quiz: Quiz;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes)
	author: User;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;
}
