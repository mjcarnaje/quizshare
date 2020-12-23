import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
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

	@Field()
	@Column()
	quizId: number;

	@Field()
	@Column()
	authorId: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.likes, { onDelete: 'CASCADE' })
	quiz: Quiz;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'CASCADE' })
	author: User;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;
}
