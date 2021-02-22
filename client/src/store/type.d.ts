import {
	QuestionInput,
	QuizInput,
	ScoreResponseFragment,
} from '../generated/graphql';

export type ResultProps = {
	result_id: string;
	title: string;
	result_photo?: string;
	minimum_percentage: number;
	description: string;
};

type ResultProp = {
	title: string;
	description: string;
	result_photo?: string | null;
};

export type TagProps = {
	name: string;
};

type QuizResultProps = {
	score: ScoreResponseFragment;
	percentage: number;
	result: ResultProp;
};

export type AnswerByUserProps = {
	question_id: string;
	choice_id: string;
};

export type SettingsInput = {
	title: string;
	description: string;
	quiz_photo?: string | null;
	tags: TagProps[];
};

export type QuizState = {
	questions: QuestionInput[];
	results: ResultProps[];
} & SettingsInput;

export type ResultState = {
	quizResult?: QuizResultProps | null;
	answersByUser: AnswerByUserProps[];
};

export interface State {
	quiz: QuizState;
	result: ResultState;
}
