import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame, changePrize } from '../reducers/gameSlice';
import { useAppSelector } from './../App';
import { convertToPrise } from './../helpers/converter';

export const FinishPage = () => {

  const prize = useAppSelector(state => state.game.prize);

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(startGame('start'));
    dispatch(changePrize(null))
  }
      
  return(
    <div className='content'>
      <div className='container'>
          <div className='split-screen bg'></div>
          <div className='split-screen'>
            <span>Total score:</span>
            <h1>${convertToPrise(prize!)} earned</h1>
            <button onClick={onStartGame}>Try again</button>
          </div>   
      </div>
    </div>
  )
}
