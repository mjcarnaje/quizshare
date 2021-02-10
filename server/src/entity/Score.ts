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
export class Score extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	quiz_id: number;

	@Column()
	taker_id: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.scores, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'quiz_id' })
	quiz: Quiz;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.answered_quizzes, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'taker_id' })
	taker: User;

	@Field()
	@Column()
	score: number;

	@Field()
	@Column()
	current_total_questions: number;

	@Field(() => String)
	@CreateDateColumn()
	answered_at: Date;
}
