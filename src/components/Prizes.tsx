import React from 'react';
import { Prize } from './Prize';

export const Prizes = (props: any) => {
     const { data } = props

     console.log('dddd', data);
     
     const prizes = data.map((item: { prize: any; }) => {
        const isActive = item.prize === props.prize
        return <Prize prize={item.prize} active={isActive}/>
     });
    
    return(
        <>
            <p>{props.prize}</p>
            <br />
            {prizes}
        </>
    )
}