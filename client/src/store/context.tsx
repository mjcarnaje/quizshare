import React, { createContext, useState } from 'react';
import { Maybe, ResultResponseFragment } from '../generated/graphql';
import { UsersAnswerProps } from '../pages/quiz/take/[id]/index';

export type QuizResultType = {
	quizResult?:
		| Maybe<{ __typename?: 'Result' } & ResultResponseFragment>
		| null
		| undefined;
	setQuizResult: (
		data:
			| Maybe<{ __typename?: 'Result' } & ResultResponseFragment>
			| null
			| undefined
	) => void;

	answersByUser: UsersAnswerProps[] | null;
	setAnswerByUser: (data: UsersAnswerProps[]) => void;
};

export const QuizResultContext = createContext<QuizResultType | null>(null);

export const QuizResultProvider: React.FC = ({ children }) => {
	const [quizResult, setQuizResult] = useState<
		Maybe<{ __typename?: 'Result' } & ResultResponseFragment> | null | undefined
	>();
	const [answersByUser, setAnswerByUser] = useState<UsersAnswerProps[] | null>(
		null
	);
	return (
		<QuizResultContext.Provider
			value={{ quizResult, setQuizResult, answersByUser, setAnswerByUser }}
		>
			{children}
		</QuizResultContext.Provider>
	);
};
