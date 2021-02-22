import {
	Stack,
	StackDivider,
	Box,
	Skeleton,
	SkeletonText,
	SkeletonCircle,
	Flex,
	AspectRatio,
} from '@chakra-ui/react';
import React from 'react';

const QuizCardLoading: React.FC = () => {
	return (
		<Box w={['100%', '460px', '820px']}>
			<Stack
				direction={['column', 'column', 'row']}
				divider={<StackDivider borderColor='gray' />}
			>
				<Stack
					direction={['column-reverse', 'column-reverse', 'row']}
					flex={1}
					align='start'
				>
					<Box w={['100%', '100%', '60%']} pos='relative'>
						<Skeleton height='20px' mb='10px' w='60%' />
						<SkeletonText mb='15px' noOfLines={1} w='24%' />

						<SkeletonCircle
							pos='absolute'
							top='4px'
							right='8px'
							display={['inline-block', 'inline-block', 'none']}
							size='3'
						/>
						<SkeletonText mb='15px' noOfLines={3} spacing='3' w='80%' />
						<Flex align='center'>
							<SkeletonCircle size='9' />
							<SkeletonText ml='10px' noOfLines={2} w='24%' />
						</Flex>
					</Box>

					<Box w={['100%', '100%', '45%']} pl={[0, 0, '32px']} cursor='pointer'>
						<Skeleton borderRadius='8px' overflow='hidden'>
							<AspectRatio maxW='full' ratio={16 / 9}>
								<Box></Box>
							</AspectRatio>
						</Skeleton>
					</Box>
				</Stack>

				<Stack
					w='70px'
					direction={['row', 'row', 'column']}
					justify='center'
					spacing={['36px', '36px', '12px']}
					pos='relative'
				>
					<SkeletonCircle
						pos='absolute'
						top='8px'
						left='8px'
						display={['none', 'none', 'inline-block']}
						size='3'
					/>
					<SkeletonCircle size='7' />
					<SkeletonCircle size='7' />
				</Stack>
			</Stack>
		</Box>
	);
};

export default QuizCardLoading;
