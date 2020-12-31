import { extendTheme } from '@chakra-ui/react';

const fonts = {
	poppins: 'Poppins, sans-serif',
	berkshire: 'Berkshire Swash, serif',
	montserrat: 'Montserrat, sans-serif',
	inter: 'Inter, sans-serif',
};

const theme = extendTheme({
	styles: {
		global: ({ colorMode }) => ({
			body: {
				fontFamily: 'Inter, sans-serif',
			},

			p: {
				color: colorMode === 'dark' ? '#BDBDBD' : 'gray.600',
			},
			h2: {
				color: colorMode === 'dark' ? 'white' : 'gray.800',
			},
			h3: {
				color: colorMode === 'dark' ? 'white' : 'gray.800',
			},
		}),
	},
	colors: {
		black: '#16161D',
	},
	fonts,
});

export default theme;
