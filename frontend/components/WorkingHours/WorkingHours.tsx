import React, { FC } from 'react';

interface IWorkingHoursProps {
    title: string;
}

const WorkingHours: FC<IWorkingHoursProps> = ({ title }) => {
    return (
        <>
            <h4>{title}</h4>
            <p>ma - pe: 11 - 18</p>
            <p>la: 11 - 16</p>
            <p>su: 12 - 16</p>
        </>
    );
};

export default WorkingHours;
