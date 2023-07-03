import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../reducers/gameSlice';

export const StartPage = () => {

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(startGame())
  }

    return(
      <div className='content'>
        <div className='container'>
            <div className='split-screen bg'></div>
            <div className='split-screen'>
              <h1>Who wants to be a millionaire?</h1>
              <button onClick={onStartGame}>Start</button>
            </div>   
        </div>
      </div>
        
    )
}
