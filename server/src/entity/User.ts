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

	@Column()
	password: string;

	@Column('bool', { default: false })
	confirmed: boolean;

	@Field(() => String)
	@CreateDateColumn()
	created_at: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updated_at: Date;

	@Field(() => Profile)
	@OneToOne(() => Profile, { cascade: true })
	@JoinColumn()
	profile: Profile;

	@OneToMany(() => Quiz, (quiz) => quiz.author)
	quizzes: Quiz[];

	@OneToMany(() => Like, (like) => like.author)
	likes: Like[];

	// @OneToMany(() => Comment, (comment) => comment.author)
	// comments: Promise<Comment[]>;
}
