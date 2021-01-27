import React, { createContext, useState } from 'react';
import { Result } from '../generated/graphql';

export type QuizResultType = {
	quizResult?: Result | null;
	setQuizResult: (data: Result | null | undefined) => void;
};

export const QuizResultContext = createContext<QuizResultType | null>(null);

export const QuizResultProvider: React.FC = ({ children }) => {
	const [quizResult, setQuizResult] = useState<Result | null | undefined>();
	return (
		<QuizResultContext.Provider value={{ quizResult, setQuizResult }}>
			{children}
		</QuizResultContext.Provider>
	);
};
