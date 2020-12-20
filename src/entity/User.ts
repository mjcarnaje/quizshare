import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './Profile';
import { Quiz } from './Quiz';

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
	createdAt: Date;

	@OneToMany(() => Quiz, (quiz) => quiz.author)
	quizzes: Quiz[];

	@Field(() => Profile, { nullable: true })
	@OneToOne(() => Profile, (profile) => profile.user)
	@JoinColumn()
	profile?: Profile;
}
