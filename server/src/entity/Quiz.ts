import { Field, ID, ObjectType, Int } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
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
	@Column()
	title: string;

	@Field()
	@Column()
	description: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	quiz_photo?: string;

	@Field(() => [Question])
	@OneToMany(() => Question, (question) => question.quiz, { cascade: true })
	questions: Question[];

	@Field(() => [Like])
	@OneToMany(() => Like, (like) => like.quiz)
	likes: Like[];

	@Field(() => Boolean)
	isLiked: boolean;

	@Field(() => Int)
	likesCount: number;

	@OneToMany(() => Comment, (comment) => comment.quiz)
	comments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updated_at: Date;
}
