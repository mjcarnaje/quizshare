import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './Comment';
import { Like } from './Like';
import { Question } from './Question';
import { User } from './User';

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => User)
	@Column()
	authorId: number;
	@ManyToOne(() => User, (user) => user.quizzes)
	@JoinColumn({ name: 'authorId' })
	author: User;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	description: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	quizPhoto: string;

	@OneToMany(() => Question, (question) => question.quizId)
	questions: Question[];

	@OneToMany(() => Like, (like) => like.author)
	likes: Like[];

	@OneToMany(() => Comment, (comment) => comment.author)
	comments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;
}
