import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
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
	choiceId: number;

	@Field()
	@Column()
	text: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	choicePhoto?: string;

	@ManyToOne(() => Question, (question) => question.choices, {
		onUpdate: 'CASCADE',
	})
	question: Question;
}
