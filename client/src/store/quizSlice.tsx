import { createStandaloneToast } from '@chakra-ui/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionInput } from '../generated/graphql';
import { QuizState, ResultProps, SettingsInput } from './type';
import { removeTypename } from '../utils/removeTypename';

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
		resetQuizState: () => quizIS,
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

		setResults: (
			state,
			{ payload }: PayloadAction<ResultProps[] | undefined | null>
		) => {
			if (payload) {
				state.results = payload;
			}

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

		fetchDataForEdit: (state, { payload }: PayloadAction<any>) => {
			const __typenameRemoved = removeTypename(payload) as QuizState;

			state.results = __typenameRemoved?.results;
			state.questions = __typenameRemoved.questions;
			state.title = __typenameRemoved.title;
			state.description = __typenameRemoved.description;
			state.quiz_photo = __typenameRemoved?.quiz_photo;
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
	resetQuizState,
	setSettings,
	setQuestions,
	setResults,
	createResult,
	deleteResult,
	updateResult,
	fetchDataForEdit,
} = quizSlice.actions;

export default quizSlice;
