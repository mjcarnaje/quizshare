import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './quizSlice';
import resultSlice from './resultSlice';

const reducer = {
	quiz: quizSlice.reducer,
	result: resultSlice.reducer,
};

export default configureStore({
	reducer,
	devTools: true,
});
