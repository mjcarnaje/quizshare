import { Flex, FlexProps, Spacer, useColorMode } from '@chakra-ui/react';
import { NavBar } from './NavBar';
import { CloudinaryContext } from 'cloudinary-react';

export const Container = ({
	justify = 'flex-start',
	align = 'center',
	...props
}: FlexProps) => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: '#181818' };
	const color = { light: 'black', dark: 'white' };

	return (
		<CloudinaryContext
			cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
		>
			<Flex
				direction='column'
				align={align}
				justify={justify}
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				{...props}
			>
				<NavBar />
				<Spacer />
				{props?.children}
				<Spacer />
			</Flex>
		</CloudinaryContext>
	);
};
