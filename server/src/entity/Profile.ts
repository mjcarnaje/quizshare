import { Field, ID, ObjectType, Root } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../types/Type';

@ObjectType()
@Entity()
export class Profile extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	first_name: string;

	@Field()
	@Column()
	last_name: string;

	@Field(() => String)
	@Column('date')
	birthday: Date;

	@Field()
	@Column('text')
	gender: Gender;

	@Field()
	name(@Root() { first_name, last_name }: Profile): string {
		return `${first_name} ${last_name}`;
	}
}
