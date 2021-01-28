import { Avatar, Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

type ProfileProps = {
	name?: string;
};

type AuthorProps = {
	avatar?: string | null;
	username: string;
	email: string;
	profile: ProfileProps;
};

interface UserAvatarProps {
	author: AuthorProps;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ author }) => {
	return (
		<HStack align='start' spacing='12px' fontSize='17px'>
			<Link href={`/user/${author.username}`}>
				<Avatar
					src={author?.avatar || ''}
					name={author.profile.name}
					cursor='pointer'
				/>
			</Link>
			<Box>
				<Heading as='h3' fontSize='17px' fontFamily='inter'>
					<Link href={`/user/${author.username}`}>{author.profile.name}</Link>
				</Heading>
				<Text fontSize='15px' lineHeight='.9'>
					<Link href={`/user/${author.username}`}>
						{`@${author.email.split('@')[0]}`}
					</Link>
				</Text>
			</Box>
		</HStack>
	);
};
