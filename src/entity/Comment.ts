// import { Field, ID, ObjectType } from 'type-graphql';
// import {
// 	BaseEntity,
// 	Column,
// 	Entity,
// 	JoinColumn,
// 	ManyToOne,
// 	PrimaryColumn,
// 	PrimaryGeneratedColumn,
// } from 'typeorm';
// import { User } from './User';
// import { Quiz } from './Quiz';

// @ObjectType()
// @Entity()
// export class Comment extends BaseEntity {
// 	@Field(() => ID)
// 	@PrimaryGeneratedColumn()
// 	id: number;

// 	@ManyToOne(() => Quiz, (quiz) => quiz.comments)
// 	quiz: Quiz;

// 	@PrimaryColumn()
// 	authorId: number;

// 	@Field(() => User)
// 	@ManyToOne(() => User, (user) => user.quizzes, { primary: true })
// 	@JoinColumn({ name: 'authorId' })
// 	author: User;

// 	@Field()
// 	@Column()
// 	text: string;
// }
