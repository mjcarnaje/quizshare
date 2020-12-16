import { Field, ObjectType, ID } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column('text', { default: null })
	avatar: string;

	@Field()
	@Column()
	username: string;

	@Field()
	@Column('text', { unique: true })
	email: string;

	@Field()
	@Column()
	password: string;
}
