import { extendTheme } from '@chakra-ui/react';

const fonts = {
	poppins: 'Poppins, sans-serif',
	berkshire: 'Berkshire Swash, serif',
	montserrat: 'Montserrat, sans-serif',
	inter: 'Inter, sans-serif',
};

const theme = extendTheme({
	styles: {
		global: {
			body: {
				fontFamily: 'Inter, sans-serif',
			},
		},
	},
	colors: {
		black: '#16161D',
		'custom-light': '#EBF4FF',
		'custom-dark': '#1A202C',
	},
	fonts,
});

export default theme;
