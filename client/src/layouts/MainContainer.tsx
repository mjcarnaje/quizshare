import { Box, useColorMode, BoxProps, Flex } from '@chakra-ui/react';
import { CloudinaryContext } from 'cloudinary-react';
import { NavBar } from '../components/NavBar';

interface MainContainerProps extends BoxProps {}

export const MainContainer: React.FC<MainContainerProps> = ({
	children,
	...props
}) => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: '#181818' };
	const color = { light: 'black', dark: 'white' };

	return (
		<CloudinaryContext
			cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
		>
			<Flex
				direction='column'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
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
