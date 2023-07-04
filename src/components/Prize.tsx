import React from 'react';
import { convertToPrise } from './../helpers/converter';

interface Prize {
    active: boolean,
    prize: string,
    isPassed: boolean
}

export const Prize = (props: Prize) => {

    const { active, isPassed, prize } = props;

    const isActive = active ? 'active' : '';

    const passed = isPassed ? 'passed' : ''

    return(
        <>
            <div className={`prize-item ${isActive} ${passed}`}>$ {convertToPrise(prize)}</div>
        </>
    )
}