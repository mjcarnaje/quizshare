import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton, IconButtonProps } from '@chakra-ui/react';

export const DarkModeSwitch: React.FC<IconButtonProps> = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<IconButton
			bg='transparent'
			_focus={{ outline: 'none' }}
			isRound
			icon={isDark ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
			{...props}
		/>
	);
};
