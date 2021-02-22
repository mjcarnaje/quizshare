import { createStandaloneToast } from '@chakra-ui/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionInput } from '../generated/graphql';
import { removeTypename } from '../utils/removeTypename';
import { QuizState, ResultProps, SettingsInput } from './type';

const toast = createStandaloneToast();

const quizIS: QuizState = {
	title: '',
	description: '',
	quiz_photo: null,
	questions: [],
	results: [],
	tags: [],
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState: quizIS,
	reducers: {
		resetQuizState: () => quizIS,
		setSettings: (
			state,
			{
				payload: { title, description, quiz_photo, tags },
			}: PayloadAction<SettingsInput>
		) => {
			state.title = title;
			state.description = description;
			state.quiz_photo = quiz_photo;
			state.tags = tags;

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
		fetchDataForEdit: (state, { payload }: PayloadAction<any>) => {
			const __typenameRemoved = removeTypename(payload) as QuizState;

			state.results = __typenameRemoved?.results;
			state.questions = __typenameRemoved.questions;
			state.title = __typenameRemoved.title;
			state.description = __typenameRemoved.description;
			state.quiz_photo = __typenameRemoved?.quiz_photo;
			state.tags = __typenameRemoved?.tags;
		},
	},
});

export const {
	resetQuizState,
	setSettings,
	setQuestions,
	setResults,
	fetchDataForEdit,
} = quizSlice.actions;

export default quizSlice;
