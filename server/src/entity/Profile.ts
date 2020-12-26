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
	firstName: string;

	@Field()
	@Column()
	lastName: string;

	@Field(() => String)
	@Column('date')
	birthday: Date;

	@Field()
	@Column('text')
	gender: Gender;

	@Field()
	name(@Root() { firstName, lastName }: Profile): string {
		return `${firstName} ${lastName}`;
	}
}
