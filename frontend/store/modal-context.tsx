import { createContext, FC, useState } from 'react';

interface IModalContext {
    modalOpen: boolean;
    toggleModal: (modalOpen: boolean) => void;
}

export const ModalContext = createContext<IModalContext>({
    modalOpen: false,
    toggleModal: (modalOpen: boolean) => {
        return;
    },
});

const ModalContextProvider: FC = ({ children }) => {
    const [modalOpen, toggleModal] = useState<boolean>(false);

    function toggleModalHandler(modalOpen: boolean) {
        toggleModal(modalOpen);
    }

    const context = {
        modalOpen,
        toggleModal: toggleModalHandler,
    };

    return (
        <ModalContext.Provider value={context}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
