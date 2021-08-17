import { createContext, FC, useState } from 'react';

interface INotificationContext {
    visible: boolean;
    toggleNotification: (visible: boolean) => void;
}

export const NotificationContext = createContext<INotificationContext>({
    visible: false,
    toggleNotification: (visible: boolean) => {
        return;
    },
});

const NotificationContextProvider: FC = ({ children }) => {
    const [visible, toggleNotification] = useState<boolean>(false);

    function toggleNotificationHandler(visible: boolean) {
        toggleNotification(visible);
    }

    const context = {
        visible,
        toggleNotification: toggleNotificationHandler,
    };

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContextProvider;
