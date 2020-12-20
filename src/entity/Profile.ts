import { Field, ID, ObjectType, Root } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Gender } from '../types/Gender';
import { User } from './User';

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

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => User, (user) => user.profile)
	user: User;

	@Field()
	name(@Root() { firstName, lastName }: Profile): string {
		return `${firstName} ${lastName}`;
	}
}
