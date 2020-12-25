import { Flex, FlexProps, Spacer, useColorMode } from '@chakra-ui/react';
import NavBar from './NavBar';

export const Container = ({
	justify = 'flex-start',
	align = 'center',
	...props
}: FlexProps) => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'custom-light', dark: 'gray.900' };
	const color = { light: 'black', dark: 'white' };

	return (
		<>
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
		</>
	);
};
