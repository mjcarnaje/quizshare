import React, { createContext, useState, useContext } from 'react';
import { User } from '../generated/graphql';

interface ContextProps {
	user?: User;
	setUser(user: User): void;
}
const UserContext = createContext<ContextProps>({
	user: undefined,
	setUser: () => {},
});

interface Props {
	children?: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useState<User>();
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export function useUserContext() {
	return useContext(UserContext);
}
