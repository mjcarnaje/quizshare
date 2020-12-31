import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<IconButton
			bg='transparent'
			_focus={{ outline: 'none' }}
			isRound
			aria-label='Toggle color mode'
			icon={isDark ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
		/>
	);
};
