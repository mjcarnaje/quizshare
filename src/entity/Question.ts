import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Choice } from './Choice';
import { Quiz } from './Quiz';

@ObjectType()
@Entity()
export class Question extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Quiz, (quiz) => quiz.questions, {
		onUpdate: 'CASCADE',
	})
	quiz: Quiz;

	@Field()
	@Column()
	question: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	questionPhoto?: string;

	@Field(() => [Choice])
	@OneToMany(() => Choice, (choice) => choice.question, {
		cascade: true,
		eager: true,
	})
	choices: Choice[];

	@Field()
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
