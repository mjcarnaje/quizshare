import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

interface SubContainerProps extends ContainerProps {}

export const SubContainer: React.FC<SubContainerProps> = ({
	children,
	boxShadow = 'md',
	borderWidth = '1px',

	...props
}) => {
	return (
		<Container
			maxW={['100%', '100%', '860px']}
			boxShadow={boxShadow}
			borderRadius='md'
			my='42px'
			p='24px'
			borderWidth={borderWidth}
			{...props}
		>
			{children}
		</Container>
	);
};
