import React, { FC, FormEvent } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';

const PayToStoreForm: FC = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };
    return (
        <Card>
            <Form
                handleSubmit={(event: FormEvent) => handleSubmit(event)}
            ></Form>
        </Card>
    );
};

export default PayToStoreForm;
