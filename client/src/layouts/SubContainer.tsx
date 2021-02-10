import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

interface SubContainerProps extends ContainerProps {}

export const SubContainer: React.FC<SubContainerProps> = ({
	children,
	boxShadow = 'md',
	borderWidth = '1px',
	width = '764px',
	my = '36px',
	...props
}) => {
	return (
		<Container
			w={width}
			maxW={['100%', '100%', `${width}`]}
			borderRadius='md'
			my={my}
			p={['10px', '10px', '24px']}
			boxShadow={boxShadow}
			borderWidth={borderWidth}
			{...props}
		>
			{children}
		</Container>
	);
};
