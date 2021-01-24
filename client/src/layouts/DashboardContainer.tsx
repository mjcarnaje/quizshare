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
		href: '/dashboard/quizzes',
		label: 'Quizzes',
	},
];

interface DashboardContainerProps extends BoxProps {}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
	children,
	...props
}) => {
	return (
		<Grid templateColumns='repeat(12, 1fr)' gap={2} px='64px'>
			<GridItem colSpan={3}>
				<List spacing='2' styleType='none' py='32px' pl='12px' pr='32px'>
					{mainNavLinks.map((item) => (
						<ListItem key={item.label}>
							<MainNavLink icon={item.icon} href={item.href}>
								{item.label}
							</MainNavLink>
						</ListItem>
					))}
				</List>
			</GridItem>
			<GridItem colSpan={9} px='5px' {...props}>
				{children}
			</GridItem>
		</Grid>
	);
};
