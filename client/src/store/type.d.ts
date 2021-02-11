import { QuizInput } from '../generated/graphql';

export type SettingsInput = {
	title: string;
	description: string;
	quiz_photo?: string | null;
};

type ResultProps = {
	result_id: string;
	title: string;
	minimum_percentage: number;
	result_photo?: string;
	description: string;
};

export type QuizState = {
	results: ResultProps[];
} & QuizInput;

export interface State {
	quiz: QuizState;
}
