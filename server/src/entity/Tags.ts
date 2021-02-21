import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './Quiz';

@ObjectType()
@Entity()
export class Tag {
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column('text', { unique: true })
	name: string;

	@ManyToMany(() => Quiz, (quiz) => quiz.tags)
	quiz: Quiz[];
}
