import {
	Flex,
	SkeletonCircle,
	Skeleton,
	AspectRatio,
	Box,
	HStack,
	SkeletonText,
	Divider,
	Container as ChakraContainer,
} from '@chakra-ui/react';
import React from 'react';

interface QuizHeadLoadingProps {}

const QuizHeadLoading: React.FC<QuizHeadLoadingProps> = ({}) => {
	return (
		<ChakraContainer
			borderRadius='8px'
			borderWidth='1px'
			maxW={['100%', '100%', '820px']}
			my='36px'
			p='0'
		>
			<Flex p='10px' align='center'>
				<SkeletonCircle size='10' />
				<Skeleton ml='20px' height='20px' w='15%' />
			</Flex>
			<Skeleton>
				<AspectRatio maxW='full' ratio={16 / 9}>
					<Box></Box>
				</AspectRatio>
			</Skeleton>
			<Box px='20px' pt='20px'>
				<Flex justify='flex-start' align='center'>
					<HStack w='30%'>
						<Box>
							<SkeletonCircle size='12' />
						</Box>
						<SkeletonText mt='2' noOfLines={2} spacing='2' w='full' />
					</HStack>
					<Divider orientation='vertical' h='50px' mx='20px' />
					<Skeleton height='22px' w='18%' />
				</Flex>
				<Box my='24px'>
					<SkeletonText mt='2' noOfLines={6} spacing='3' w='full' />
				</Box>
				<Box py='5px'>
					<SkeletonText noOfLines={1} w='28%' />
				</Box>
				<Divider />
				<Flex justify='space-around' py='15px'>
					<SkeletonText ml='5px' noOfLines={1} w='17%' />
					<SkeletonText ml='5px' noOfLines={1} w='17%' />
					<SkeletonText ml='5px' noOfLines={1} w='17%' />
				</Flex>
				<Divider />
				<Flex justify='space-around' py='18px' align='center'>
					<SkeletonCircle size='8' />
					<SkeletonCircle size='8' />
					<Skeleton height='22px' w='15%' />
				</Flex>
			</Box>
		</ChakraContainer>
	);
};

export default QuizHeadLoading;
