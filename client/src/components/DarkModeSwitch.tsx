import { useColorMode, Switch } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	return (
		<Switch
			position='fixed'
			bottom='1rem'
			left='1rem'
			colorScheme='purple'
			isChecked={isDark}
			onChange={toggleColorMode}
		/>
	);
};
