import { Field, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm';
import { Quiz } from './Quiz';
import { User } from './User';

@ObjectType()
@Entity()
export class Like extends BaseEntity {
	@Field()
	@PrimaryColumn()
	quiz_id: number;

	@Field()
	@PrimaryColumn()
	author_id: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.likes, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'quiz_id' })
	quiz: Quiz;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'author_id' })
	author: User;

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;
}
