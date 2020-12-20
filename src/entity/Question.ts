import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Choice } from './Choice';
import { Quiz } from './Quiz';

@ObjectType()
@Entity()
export class Question extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	quizId: number;
	@ManyToOne(() => Quiz, (quiz) => quiz.questions)
	@JoinColumn({ name: 'quizId' })
	quiz: Quiz;

	@Field()
	@Column()
	question: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	questionPhoto: string;

	@Field(() => Choice)
	@OneToMany(() => Choice, (choice) => choice.questionId)
	choices: Choice[];

	@Field(() => ID)
	@Column()
	answer: number;

	@Field({ nullable: true })
	@Column('text', { default: null })
	explanation: string;

	@Field()
	@Column('bool', { default: false })
	withExplanation: boolean;

	@Field({ nullable: true })
	@Column('text', { default: null })
	hint: string;

	@Field()
	@Column('bool', { default: false })
	withHint: boolean;
}
