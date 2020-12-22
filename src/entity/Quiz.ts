import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Question } from './Question';
import { User } from './User';

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'CASCADE' })
	author: User;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	description: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	quizPhoto?: string;

	@Field(() => [Question])
	@OneToMany(() => Question, (question) => question.quiz, { cascade: true })
	questions: Question[];

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updateAt: Date;
}
