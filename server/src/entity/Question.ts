import { GraphQLJSONObject } from 'graphql-type-json';
import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
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

	@ManyToOne(() => Quiz, (quiz) => quiz.questions, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
	})
	quiz: Quiz;

	@Field()
	@Column()
	question: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	question_photo?: string;

	@Field(() => [GraphQLJSONObject])
	@Column('jsonb')
	choices: { choice_id: number; text: string; choicePhoto: null | string }[];

	@Field()
	@Column()
	answer: number;

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
