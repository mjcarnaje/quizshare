import { createStandaloneToast } from '@chakra-ui/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionInput } from '../generated/graphql';
import { QuizState, ResultProps, SettingsInput } from './type';

const toast = createStandaloneToast();

const quizIS: QuizState = {
	title: '',
	description: '',
	quiz_photo: null,
	questions: [],
	results: [],
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState: quizIS,
	reducers: {
		setSettings: (
			state,
			{
				payload: { title, description, quiz_photo },
			}: PayloadAction<SettingsInput>
		) => {
			state.title = title;
			state.description = description;
			state.quiz_photo = quiz_photo;

			toast({
				description: 'Settings saved.',
				status: 'success',
				duration: 5000,
				isClosable: true,
				position: 'bottom-right',
			});
		},

		setQuestions: (state, { payload }: PayloadAction<QuestionInput[]>) => {
			state.questions = payload;

			toast({
				description: 'Questions saved.',
				status: 'success',
				duration: 5000,
				isClosable: true,
				position: 'bottom-right',
			});
		},

		createResult: (state, { payload }: PayloadAction<ResultProps>) => {
			state.results.push(payload);

			state.results.sort((a, b) => {
				return b.minimum_percentage - a.minimum_percentage;
			});

			toast({
				description: 'Added result.',
				status: 'success',
				duration: 3000,
				isClosable: true,
				position: 'bottom-left',
			});
		},

		deleteResult: (state, { payload }: PayloadAction<string>) => {
			const idx = state.results.findIndex(
				(result) => result.result_id === payload
			);

			state.results.splice(idx, 1);

			toast({
				description: 'Result deleted.',
				status: 'success',
				duration: 3000,
				isClosable: true,
				position: 'bottom-left',
			});
		},

		updateResult: (
			state,
			{ payload }: PayloadAction<{ id: string; data: ResultProps }>
		) => {
			const idx = state.results.findIndex(
				(result) => result.result_id === payload.id
			);
			state.results[idx] = payload.data;
		},
	},
});

export const {
	setSettings,
	setQuestions,
	createResult,
	deleteResult,
	updateResult,
} = quizSlice.actions;

export default quizSlice;
