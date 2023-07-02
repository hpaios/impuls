import React, { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';
import { nextQuestion, changeStatus, changePrize } from '../reducers/gameSlice';


export const Answer = (props: any) => {

    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    const { item, answer, correct, nextLevelId, prize } = props;

    useEffect(() => {
      if (color === 'green') {
          setTimeout(() => {
              dispatch(nextQuestion(nextLevelId))
              dispatch(changeStatus(nextLevelId))
              dispatch(changePrize(prize))
              setColor('')
          }, 1000)
      } else if (color === 'red') {
          setTimeout(() => {
              dispatch(changeStatus('finish'))
              setColor('')
          }, 1000)
      }
  }, [color])

    const getResult = (item: string) => {
      if(correct === item) {
          setColor('green')
      } else {
          setColor('red')
      }
  }

  const changeColor = (item: string) => {
      setColor('orange')
      
      setTimeout(() => getResult(item), 1000);
  }
    
    return(
        <div>
            <span>{item}</span>
            <br />
            <button
                style={{backgroundColor: `${color}`}}
                onClick={() => changeColor(item)}
            >
                {answer}
            </button>
        </div>
    )
}