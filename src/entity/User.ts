import { Field, ObjectType, ID, Root } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../types/Gender';

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	firstName: string;

	@Field()
	@Column()
	lastName: string;

	@Field({ nullable: true })
	@Column('text', { default: null })
	avatar: string;

	@Field({ nullable: true })
	@Column('text', { default: null, unique: true })
	username: string;

	@Field()
	@Column('text', { unique: true })
	email: string;

	@Field(() => String)
	@Column('date')
	birthday: Date | string; // temporary

	@Field()
	@Column('text')
	gender: Gender;

	@Column()
	password: string;

	@Field()
	name(@Root() { firstName, lastName }: User): string {
		return `${firstName} ${lastName}`;
	}

	@Column('bool', { default: false })
	confirmed: boolean;
}
