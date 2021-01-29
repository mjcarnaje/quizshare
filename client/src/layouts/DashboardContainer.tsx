import React from 'react';
import {
	BoxProps,
	Center,
	Grid,
	GridItem,
	List,
	Flex,
	ListItem,
	useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoDocumentsOutline } from 'react-icons/io5';
import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';

interface MainNavLinkProps {
	href: string;
	icon: any;
}

const MainNavLink: React.FC<MainNavLinkProps> = ({ href, icon, children }) => {
	const { pathname } = useRouter();
	const [, , path] = href.split('/');

	const active = pathname.includes(path);
	const linkColor = useColorModeValue('purple.500', 'gray.100');
	const bgColor = useColorModeValue('purple.50', 'rgba(255, 255, 255, 0.04)');

	return (
		<NextLink href={href} passHref>
			<Flex
				as='a'
				align='center'
				fontSize='md'
				fontWeight={active ? 'semibold' : ''}
				transitionProperty='colors'
				transitionDuration='200ms'
				color={active ? linkColor : 'gray.500'}
				_hover={{ color: linkColor, bg: bgColor }}
				fontFamily='inter'
				bg={active ? bgColor : ''}
				px='6px'
				py='8px'
				rounded='8px'
			>
				<Center mr='3' fontSize='24px'>
					{icon}
				</Center>
				{children}
			</Flex>
		</NextLink>
	);
};

const mainNavLinks = [
	{
		icon: <AiOutlineUser />,
		href: '/dashboard/profile',
		label: 'Profile',
	},
	{
		icon: <IoDocumentsOutline />,
		href: '/dashboard/published',
		label: 'Published',
	},
];

interface DashboardContainerProps extends BoxProps {}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
	children,
	...props
}) => {
	return (
		<Grid
			templateColumns='repeat(12, 1fr)'
			gap={2}
			px={['0', '32px', '32px', '64px']}
		>
			<GridItem colSpan={[12, 12, 12, 3]}>
				<List
					display={['block', 'flex', 'flex', 'block']}
					justifyContent={['', 'space-between', 'space-between', '']}
					alignItems={['', 'center', 'center', '']}
					spacing={['2', '0', '0', '2']}
					styleType='none'
					pt='32px'
					pb={['0', '0', '0', '32px']}
					pl={['0', '0', '0', '12px']}
					pr={['0', '0', '0', '32px']}
				>
					{mainNavLinks.map((item) => (
						<ListItem key={item.label} w='full' mx={['0', '2px', '2px', '0']}>
							<MainNavLink icon={item.icon} href={item.href}>
								{item.label}
							</MainNavLink>
						</ListItem>
					))}
				</List>
			</GridItem>
			<GridItem colSpan={[12, 12, 12, 9]} px='5px' {...props}>
				{children}
			</GridItem>
		</Grid>
	);
};
