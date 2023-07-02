import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../reducers/gameSlice';

export const StartPage = () => {

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(startGame())
  }

    return(
        <>
            <h1>Who wants to be a millionaire?</h1>
            <button onClick={onStartGame}>Start</button>
        </>
    )
}
