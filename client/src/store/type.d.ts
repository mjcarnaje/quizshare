import { QuizInput } from '../generated/graphql';

export type SettingsInput = {
	title: string;
	description: string;
	quiz_photo?: string | null;
};

export interface State {
	quiz: QuizInput;
}
