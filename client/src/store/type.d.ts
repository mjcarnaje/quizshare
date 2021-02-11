import {
	QuestionInput,
	QuizInput,
	ScoreResponseFragment,
} from '../generated/graphql';

export type SettingsInput = {
	title: string;
	description: string;
	quiz_photo?: string | null;
};

type ResultProps = {
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

type QuizResultProps = {
	score: ScoreResponseFragment;
	percentage: number;
	result: ResultProp;
};

export type AnswerByUserProps = {
	question_id: string;
	choice_id: string;
};

export type QuizState = {
	title: string;
	description: string;
	quiz_photo?: string | null | undefined;
	questions: QuestionInput[];
	results: ResultProps[];
};

export type ResultState = {
	quizResult?: QuizResultProps | null;
	answersByUser: AnswerByUserProps[];
};

export interface State {
	quiz: QuizState;
	result: ResultState;
}
