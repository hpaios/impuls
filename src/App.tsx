import React from 'react';
import './App.scss';
import { StartPage } from './components/StartPage';
import { useSelector } from 'react-redux';
import { Main } from './components/Main';
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState } from './store/store';
import { FinishPage } from './components/FinishPage';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const App = () => {

  const status = useAppSelector(state => state.game.status);
  
  const getComponentToShow = () => {
    switch(status) {
      case 'start': {
          return <StartPage />
      }
      case 'inProgress': {
          return <Main/>
      }
      case 'finish': {
          return <FinishPage/>
      }
    }
  }

  return (
    <div className="App">
      <div className='responsive-box'></div>
      {getComponentToShow()}
    </div>
  );
}

export default App;
