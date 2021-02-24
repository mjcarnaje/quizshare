import { Box, BoxProps, Flex, useColorModeValue } from '@chakra-ui/react';
import { CloudinaryContext } from 'cloudinary-react';
import { NavBar } from '../components/navbar/NavBar';

interface MainContainerProps extends BoxProps {
	withSearchBar?: boolean;
}

export const MainContainer: React.FC<MainContainerProps> = ({
	children,
	withSearchBar,
	...props
}) => {
	return (
		<CloudinaryContext
			cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
		>
			<Flex
				direction='column'
				bg={useColorModeValue('white', '#181818')}
				color={useColorModeValue('#000', '#fff')}
				minHeight='100vh'
			>
				<NavBar />
				<Box px={['10px', '16px', '24px']} {...props}>
					{children}
				</Box>
			</Flex>
		</CloudinaryContext>
	);
};
