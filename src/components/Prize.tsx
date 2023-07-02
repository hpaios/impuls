import React from 'react';

export const Prize = (props: any) => {
    const active = props.active ? 'red' : '';
    return(
        <>
            <p style={{color: active}}>{props.prize}</p>
        </>
    )
}