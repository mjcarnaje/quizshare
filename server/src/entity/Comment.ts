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
export class Comment extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	quiz_id: number;

	@Field()
	@Column()
	author_id: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.comments, { onDelete: 'CASCADE' })
	quiz: Quiz;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'CASCADE' })
	author: User;

	@Field()
	@Column()
	text: string;

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;
}
