import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './Quiz';

@ObjectType()
@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@ManyToMany(() => Quiz, (quiz) => quiz.categories)
	quiz: Quiz[];
}
