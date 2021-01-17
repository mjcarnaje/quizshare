import {
	Avatar,
	Box,
	Button,
	Spinner,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useCommentsQuery } from '../generated/graphql';

interface SingleQuizCommentsProps {
	quiz_id: number;
}
const SingleQuizComments: React.FC<SingleQuizCommentsProps> = ({ quiz_id }) => {
	const buttonColorScheme = useColorModeValue('purple', 'gray');

	const { data, loading, error, fetchMore, variables } = useCommentsQuery({
		variables: {
			limit: 5,
			cursor: null,
			quiz_id: quiz_id,
		},
		notifyOnNetworkStatusChange: true,
	});
	if (!loading && !data) {
		return (
			<Box>
				<Text>There is an error</Text>
				<Text>{error?.message}</Text>
			</Box>
		);
	}

	if (!data && loading) {
		return <Spinner />;
	}

	return (
		<>
			{data &&
				data.comments!.comments.map((comment) => {
					const { text, author } = comment;
					return (
						<Box>
							<Avatar src={author.avatar || ''} name={author.profile.name} />
							<Text>{text}</Text>
						</Box>
					);
				})}
			{data && data.comments?.hasMore && (
				<Button
					size='sm'
					colorScheme={buttonColorScheme}
					variant='ghost'
					fontSize={16}
					my='20px'
					onClick={() => {
						fetchMore({
							variables: {
								limit: variables?.limit,
								cursor:
									data.comments?.comments[data.comments?.comments.length - 1]
										.created_at,
							},
						});
					}}
					isLoading={loading}
				>
					Load more
				</Button>
			)}
		</>
	);
};
export default SingleQuizComments;
