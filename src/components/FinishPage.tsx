import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame, changePrize } from '../reducers/gameSlice';
import { useAppSelector } from './../App';
import { convertToPrise } from './../helpers/converter';

export const FinishPage = () => {

    const prize = useAppSelector(state => state.game.prize);

     const dispatch = useDispatch();

     const onStartGame = () => {
        dispatch(startGame());
        dispatch(changePrize(null))
      }
      
    return(
        <>
            <span>Total score: ${convertToPrise(prize!)} earned</span>
            <button onClick={onStartGame}>Try again</button>
        </>
    )
}
