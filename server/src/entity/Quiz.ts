import { GraphQLJSONObject } from 'graphql-type-json';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	Index,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category';
import { Comment } from './Comment';
import { Like } from './Like';
import { Question } from './Question';
import { Score } from './Score';
import { User } from './User';

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

	@Field(() => [GraphQLJSONObject], { nullable: true })
	@Column('jsonb', { default: null })
	results: {
		result_id: string;
		title: string;
		result_photo?: string;
		minimum_percentage: number;
		description: string;
	}[];

	@Field(() => [Category], { nullable: true })
	@ManyToMany(() => Category, (category) => category.quiz, {
		cascade: true,
		nullable: true,
	})
	@JoinTable()
	categories?: Category[];

	@Field(() => [Score], { nullable: true })
	@OneToMany(() => Score, (score) => score.quiz, { cascade: true })
	scores: Score[];

	@Field(() => [Like], { nullable: true })
	@OneToMany(() => Like, (like) => like.quiz, { cascade: true })
	likes: Like[];

	@Field(() => [Comment], { nullable: true })
	@OneToMany(() => Comment, (comment) => comment.quiz)
	comments: Comment[];

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updated_at: Date;

	@Field(() => Int)
	scores_count: number;

	@Field(() => Boolean)
	is_taken: boolean;

	@Field(() => Boolean)
	is_liked: boolean;

	@Field(() => Int)
	likes_count: number;

	@Field(() => Int)
	comments_count: number;
}
