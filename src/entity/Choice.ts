import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Question } from './Question';

@ObjectType()
@Entity()
export class Choice extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	text: string;

	@Column()
	questionId: number;
	@ManyToOne(() => Question, (question) => question.choices)
	@JoinColumn({ name: 'questionId' })
	question: Question;
}
