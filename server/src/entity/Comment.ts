import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
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

	@Column()
	quiz_id: number;

	@Column()
	author_id: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.comments, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'quiz_id' })
	quiz: Quiz;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'author_id' })
	author: User;

	@Field()
	@Column()
	text: string;

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;
}
