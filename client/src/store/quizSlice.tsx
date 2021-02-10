import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionInput, QuizInput } from '../generated/graphql';
import { SettingsInput } from './type';

import { createStandaloneToast } from '@chakra-ui/react';
const toast = createStandaloneToast();

const quizIS: QuizInput = {
	title: '',
	description: '',
	quiz_photo: null,
	questions: [],
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
				status: 'info',
				duration: 5000,
				isClosable: true,
				position: 'bottom-left',
			});
		},
		setQuestions: (state, { payload }: PayloadAction<QuestionInput[]>) => {
			state.questions = payload;

			toast({
				description: 'Questions saved.',
				status: 'info',
				duration: 5000,
				isClosable: true,
				position: 'bottom-left',
			});
		},
	},
});

export const { setSettings, setQuestions } = quizSlice.actions;

export default quizSlice;
