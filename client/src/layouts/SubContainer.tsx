import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

interface SubContainerProps extends ContainerProps {}

export const SubContainer: React.FC<SubContainerProps> = ({
	children,
	...props
}) => {
	return (
		<Container
			maxW={['100%', '100%', '860px']}
			boxShadow='md'
			borderRadius='md'
			my='42px'
			p='24px'
			borderWidth='1px'
			{...props}
		>
			{children}
		</Container>
	);
};
