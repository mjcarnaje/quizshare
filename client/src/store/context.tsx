import React, { createContext, useState } from 'react';
import { Maybe, ScoreResponseFragment } from '../generated/graphql';
import { UsersAnswerProps } from '../pages/quiz/take/[id]/index';

export type QuizScoreType = {
	quizScore?:
		| Maybe<{ __typename?: 'Score' } & ScoreResponseFragment>
		| null
		| undefined;
	setQuizScore: (
		data:
			| Maybe<{ __typename?: 'Score' } & ScoreResponseFragment>
			| null
			| undefined
	) => void;

	answersByUser: UsersAnswerProps[] | null;
	setAnswerByUser: (data: UsersAnswerProps[]) => void;
};

export const QuizScoreContext = createContext<QuizScoreType | null>(null);

export const QuizScoreProvider: React.FC = ({ children }) => {
	const [quizScore, setQuizScore] = useState<
		Maybe<{ __typename?: 'Score' } & ScoreResponseFragment> | null | undefined
	>();
	const [answersByUser, setAnswerByUser] = useState<UsersAnswerProps[] | null>(
		null
	);
	return (
		<QuizScoreContext.Provider
			value={{ quizScore, setQuizScore, answersByUser, setAnswerByUser }}
		>
			{children}
		</QuizScoreContext.Provider>
	);
};
