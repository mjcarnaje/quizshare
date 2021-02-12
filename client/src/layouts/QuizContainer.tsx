import {
	BoxProps,
	Center,
	Flex,
	Grid,
	GridItem,
	Heading,
	List,
	ListItem,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React from 'react';
import { HiUpload } from 'react-icons/hi';
import { IoSettings, IoStatsChart } from 'react-icons/io5';
import { MdLibraryBooks } from 'react-icons/md';
import { Button } from '@chakra-ui/react';
import {
	useCreateQuizMutation,
	useUpdateQuizMutation,
} from '../generated/graphql';
import { QuizState, State } from '../store/type';
import { useSelector } from 'react-redux';

interface MainNavLinkProps {
	href: string;
	icon: any;
	type: 'update' | 'create';
}

const MainNavLink: React.FC<MainNavLinkProps> = ({
	href,
	icon,
	children,
	type,
}) => {
	const { pathname } = useRouter();
	const path = href.split('/');
	const active = pathname.includes(path[type === 'update' ? 4 : 3]);
	const linkColor = useColorModeValue('purple.500', 'gray.100');
	const bgColor = useColorModeValue('purple.50', 'rgba(255, 255, 255, 0.04)');

	return (
		<NextLink href={href} passHref>
			<Flex
				as='a'
				align='center'
				justify={['center', 'center', 'center', 'flex-start']}
				fontSize='md'
				fontWeight={active ? 'semibold' : ''}
				transitionProperty='colors'
				transitionDuration='200ms'
				color={active ? linkColor : 'gray.500'}
				_hover={{ color: linkColor, bg: bgColor }}
				fontFamily='inter'
				bg={active ? bgColor : ''}
				px='12px'
				py='8px'
				rounded='8px'
				w='full'
			>
				<Center mr='3' fontSize='18px'>
					{icon}
				</Center>
				{children}
			</Flex>
		</NextLink>
	);
};

interface QuizContainerProps extends BoxProps {
	type: 'update' | 'create';
	quizId?: string;
}

export const QuizContainer: React.FC<QuizContainerProps> = ({
	children,
	type,
	quizId,
	...props
}) => {
	let url = type === 'update' ? `quiz/edit/${quizId}` : 'quiz/create';

	const mainNavLinks = [
		{
			icon: <IoSettings />,
			href: `/${url}/settings`,
			label: 'Settings',
		},
		{
			icon: <MdLibraryBooks />,
			href: `/${url}/questions`,
			label: 'Questions',
		},
		{
			icon: <IoStatsChart />,
			href: `/${url}/results`,
			label: 'Results',
		},
	];

	const router = useRouter();

	const quiz = useSelector((state: State) => state.quiz);

	const [createQuiz, { loading }] = useCreateQuizMutation();
	const [updateQuiz, { loading: updateLoading }] = useUpdateQuizMutation();

	const onSubmit = async (quiz: QuizState) => {
		if (type === 'create') {
			try {
				const { errors } = await createQuiz({
					variables: quiz,
					update: (cache) => {
						cache.evict({ fieldName: 'quizzes' });
					},
				});
				if (!errors) {
					router.push('/');
				}
			} catch (err) {
				console.error(err);
			}
		} else if (type === 'update') {
			try {
				const { errors } = await updateQuiz({
					variables: {
						inputs: quiz,
						quiz_id: parseInt(quizId as string),
					},
					update: (cache) => {
						cache.evict({ fieldName: 'quizzes' });
						cache.evict({ fieldName: 'quizToUpdate' });
					},
				});
				if (!errors) {
					router.push('/');
				}
			} catch (err) {
				console.error(err);
			}
		}
	};

	return (
		<>
			<Heading
				as='h1'
				fontFamily='inter'
				fontWeight='800'
				color={useColorModeValue('gray.800', 'white')}
				lineHeight='1'
				fontSize={['30px', '42px', '56px']}
				pb='40px'
				textAlign='center'
			>
				Create an interactive quiz
			</Heading>
			<Grid
				templateColumns='repeat(12, 1fr)'
				gap={2}
				px={['0', '32px', '32px', '64px']}
				mx='auto'
				maxW='1100px'
			>
				<GridItem colSpan={[12, 12, 12, 3]} maxW='764px'>
					<List
						display={['block', 'flex', 'flex', 'block']}
						justifyContent={['', 'space-between', 'space-between', '']}
						alignItems={['', 'center', 'center', '']}
						spacing={['2', '0', '0', '2']}
						styleType='none'
						bg='white'
						boxShadow='md'
						borderRadius='md'
						borderWidth='1px'
						p='10px'
					>
						{mainNavLinks.map((item) => (
							<ListItem key={item.label} w='full' mx={['0', '2px', '2px', '0']}>
								<MainNavLink icon={item.icon} href={item.href} type={type}>
									{item.label}
								</MainNavLink>
							</ListItem>
						))}
					</List>
					<Button
						mt='20px'
						leftIcon={<HiUpload />}
						colorScheme='purple'
						w='full'
						isLoading={loading ?? updateLoading}
						onClick={() => onSubmit(quiz)}
					>
						Published
					</Button>
				</GridItem>
				<GridItem colSpan={[12, 12, 12, 9]} px='5px' {...props}>
					{children}
				</GridItem>
			</Grid>
		</>
	);
};
