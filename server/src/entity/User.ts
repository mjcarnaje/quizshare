import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	// OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Like } from './Like';
import { Profile } from './Profile';
import { Quiz } from './Quiz';
// import { Comment } from './Comment';
import { Score } from './Score';

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column('text', { unique: true })
	username: string;

	@Field()
	@Column('text', { unique: true })
	email: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	avatar?: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	cover_photo?: string;

	@Column()
	password: string;

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updated_at: Date;

	@Field(() => Profile)
	@OneToOne(() => Profile, { cascade: true, eager: true })
	@JoinColumn({ name: 'profile_id' })
	profile: Profile;

	@OneToMany(() => Score, (score) => score.quiz, { cascade: true })
	answered_quizzes: Score[];

	@OneToMany(() => Quiz, (quiz) => quiz.author)
	quizzes: Quiz[];

	@OneToMany(() => Like, (like) => like.author)
	likes: Like[];

	// @OneToMany(() => Comment, (comment) => comment.author)
	// comments: Promise<Comment[]>;
}
