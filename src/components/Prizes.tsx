import React from 'react';
import { Prize } from './Prize';
import { Question } from '../ts/interfaces';

interface PrizesProps {
  data: Question[]
  prize: string | undefined
}

export const Prizes = (props: PrizesProps) => {
     const { prize, data } = props
     
     const prizes = data.map((item: { prize: string }) => {
        const isActive = item.prize === prize;
        const isPassed =  +prize! > +item.prize;

        return <Prize prize={item.prize} active={isActive} isPassed={isPassed}/>
     });
    
    return(
        <>
          {prizes.reverse()}
        </>
    )
}
