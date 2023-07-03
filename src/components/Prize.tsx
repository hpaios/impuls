import React from 'react';
import { convertToPrise } from './../helpers/converter';

interface Prize {
    active: boolean,
    prize: string
}

export const Prize = (props: Prize) => {

    const { active } = props;

    const isActive = active ? 'red' : '';

    return(
        <>
            <p style={{color: isActive}}>$ {convertToPrise(props.prize)}</p>
        </>
    )
}