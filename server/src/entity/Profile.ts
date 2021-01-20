import { Field, ID, ObjectType, Root } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../types/Type';
import { GraphQLJSONObject } from 'graphql-type-json';

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

	@Field(() => String, { nullable: true })
	@Column('text', { default: null })
	country?: string;

	@Field(() => String, { nullable: true })
	@Column('text', { default: null })
	bio?: string;

	@Field(() => GraphQLJSONObject, { nullable: true })
	@Column('jsonb', { default: null })
	social: {
		facebook?: string;
		twitter?: string;
		instagram?: string;
		youtube?: string;
	};

	@Field()
	name(@Root() { first_name, last_name }: Profile): string {
		return `${first_name} ${last_name}`;
	}
}
