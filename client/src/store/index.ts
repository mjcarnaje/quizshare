import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './quizSlice';

const reducer = {
	quiz: quizSlice.reducer,
};

export default configureStore({
	reducer,
	devTools: true,
});
