import { GraphQLJSONObject } from 'graphql-type-json';
import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './Quiz';

@ObjectType()
@Entity()
export class Question extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	question_id: string;

	@ManyToOne(() => Quiz, (quiz) => quiz.questions, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'quiz_id' })
	quiz: Quiz;

	@Column()
	quiz_id: number;

	@Field()
	@Column()
	question: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	question_photo?: string;

	@Field(() => [GraphQLJSONObject])
	@Column('jsonb')
	choices: { choice_id: string; value: string; choice_photo: null | string }[];

	@Field()
	@Column()
	answer: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	explanation: string;

	@Field()
	@Column('bool', { default: false })
	with_explanation: boolean;

	@Field({ nullable: true })
	@Column('text', { default: null })
	hint: string;

	@Field()
	@Column('bool', { default: false })
	with_hint: boolean;
}
