import { createContext, FC, useState } from 'react';
import { IUser } from '../../@types';

interface IUserContext {
    user: IUser | null;
    logInActiveUser: (user: IUser) => void;
    logOutActiveUser: () => void;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    logInActiveUser: (user: IUser) => {
        return user;
    },
    logOutActiveUser: () => {
        return;
    },
});

const UserContextProvider: FC = ({ children }) => {
    const [activeUser, setActiveUser] = useState<IUser | null>(null);

    function logInActiveUserHandler(user: IUser) {
        setActiveUser(user);
    }

    function logOutActiveUserHandler() {
        setActiveUser(null);
    }

    const context = {
        user: activeUser,
        logInActiveUser: logInActiveUserHandler,
        logOutActiveUser: logOutActiveUserHandler,
    };

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
};

export default UserContextProvider;
