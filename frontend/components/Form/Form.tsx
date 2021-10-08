import React, { FC, FormEvent } from 'react';

interface IFormProps {
    handleSubmit: (event: FormEvent) => void;
}

const Form: FC<IFormProps> = ({ handleSubmit, children }) => {
    return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
