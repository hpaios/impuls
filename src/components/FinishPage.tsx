import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame, changePrize } from '../reducers/gameSlice';

export const FinishPage = (props: any) => {

     const dispatch = useDispatch();

     const onStartGame = () => {
        dispatch(startGame());
        dispatch(changePrize(null))
      }

    return(
        <>
            <span>Total score: ${props.prize} earned</span>
            <button onClick={onStartGame}>Try again</button>
        </>
    )
}