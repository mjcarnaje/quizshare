import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultState, AnswerByUserProps, QuizResultProps } from './type';

const resultIS: ResultState = {
	answersByUser: [],
	quizResult: null,
};

const resultSlice = createSlice({
	name: 'result',
	initialState: resultIS,
	reducers: {
		resetResultState: () => resultIS,
		setAnswerByUser: (
			state,
			{ payload }: PayloadAction<AnswerByUserProps[]>
		) => {
			state.answersByUser = payload;
		},
		setQuizResult: (
			state,
			{ payload }: PayloadAction<QuizResultProps | undefined>
		) => {
			state.quizResult = payload;
		},
	},
});

export const {
	resetResultState,
	setAnswerByUser,
	setQuizResult,
} = resultSlice.actions;

export default resultSlice;
