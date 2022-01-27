import * as React from 'react';
import { IUserProps } from './Interfaces';



export const User = ({ name, age, isMail }: IUserProps) => {
    return (
        <>

            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{isMail?'boy':'girl'}</h2>

        </>
    );
}
