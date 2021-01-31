import { Field, ID, ObjectType, Int } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Question } from './Question';
import { User } from './User';
import { Like } from './Like';
import { Comment } from './Comment';
import { Result } from './Result';

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	author_id: number;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'author_id' })
	author: User;

	@Field()
	@Index({ fulltext: true })
	@Column()
	title: string;

	@Field()
	@Index({ fulltext: true })
	@Column()
	description: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	quiz_photo?: string;

	@Field(() => [Question])
	@OneToMany(() => Question, (question) => question.quiz, { cascade: true })
	questions: Question[];

	@Field(() => [Result])
	@OneToMany(() => Result, (result) => result.quiz, { cascade: true })
	takers: Result[];

	@Field(() => Int)
	takers_count: number;

	@Field(() => Boolean)
	is_taken: boolean;

	@Field(() => [Like])
	@OneToMany(() => Like, (like) => like.quiz)
	likes: Like[];

	@Field(() => Boolean)
	is_liked: boolean;

	@Field(() => Int)
	likes_count: number;

	@Field(() => [Comment])
	@OneToMany(() => Comment, (comment) => comment.quiz)
	comments: Comment[];

	@Field(() => Int)
	comments_count: number;

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updated_at: Date;
}
