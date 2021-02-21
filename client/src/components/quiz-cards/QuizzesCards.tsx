import { ApolloError } from '@apollo/client';
import React from 'react';
import { QuizzesResponseFragment } from '../../generated/graphql';
import { SubContainer } from '../../layouts/SubContainer';
import { QuizItemLoading } from '../loading/QuizItemLoading';
import { Heading, Box, Text, VStack } from '@chakra-ui/react';
import { QuizItem } from './QuizItem';

interface QuizzesCardsProps {
	quizzes?: QuizzesResponseFragment[] | null;
	isLoading?: boolean;
	isError?: ApolloError;
}

export const QuizzesCards: React.FC<QuizzesCardsProps> = ({
	quizzes,
	isLoading,
	isError,
}) => {
	if (quizzes?.length === 0) return null;
	return (
		<SubContainer boxShadow='none' borderWidth='0'>
			<VStack spacing='40px'>
				{!quizzes && isLoading && (
					<>
						{[...Array(3).keys()].map((_, i) => (
							<QuizItemLoading key={i} />
						))}
					</>
				)}
				{!quizzes && !isLoading && (
					<Box>
						<Heading>There is an error</Heading>
						<Text>{isError?.message}</Text>
					</Box>
				)}
				{quizzes &&
					quizzes.map((quiz) => <QuizItem key={quiz.id} quiz={quiz} />)}
				{quizzes && isLoading && (
					<>
						{[...Array(2).keys()].map((_, i) => (
							<QuizItemLoading key={i} />
						))}
					</>
				)}
			</VStack>
		</SubContainer>
	);
};
