// import { Field, ID, ObjectType } from 'type-graphql';
// import {
// 	BaseEntity,
// 	Entity,
// 	JoinColumn,
// 	ManyToOne,
// 	PrimaryColumn,
// 	PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Quiz } from './Quiz';
// import { User } from './User';

// @ObjectType()
// @Entity()
// export class Like extends BaseEntity {
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
// }
