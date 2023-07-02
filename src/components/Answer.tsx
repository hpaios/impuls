import React, { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';
import { nextQuestion, changeStatus } from './gameSlice';

export const Answer = (props) => {
 
    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (color === 'green') {
            setTimeout(() => {
                dispatch(nextQuestion(props.next))
                dispatch(changeStatus(props.next))
                setColor('')
            }, 1000)
        } else if (color === 'red') {
            setTimeout(() => {
                dispatch(nextQuestion('level_1'))
                dispatch(changeStatus('start'))
                setColor('')
            }, 1000)
        }
    }, [color])

    const getResult = (value) => {
        if(props.correct === value) {
            setColor('green')
        } else {
            setColor('red')
        }
    }

    const changeColor = (value) => {
        setColor('orange')
        
        setTimeout(() => getResult(value), 1000);
    }

    return(
        <div>
            <span>{props.value}</span>
            <button
                style={{backgroundColor: `${color}`}}
                onClick={() => changeColor(props.value)}
            >
                {props.ans}
            </button>
        </div>
    )
}
