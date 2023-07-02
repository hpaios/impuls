import React from 'react';
import './App.scss';
import { StartPage } from './components/StartPage';
import { useSelector } from 'react-redux';
import { QuestionList } from './components/QuestionList';
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState } from './store/store';
import { FinishPage } from './components/FinishPage';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const App = () => {

  const status = useAppSelector(state => state.game.status);
  const prize = useAppSelector(state => state.game.prize);

  const getComponentToShow = () => {
    switch(status) {
      case 'start': {
          return <StartPage />
      }
      case 'inProgress': {
          return <QuestionList/>
      }
      case 'finish': {
          return <FinishPage prize={prize}/>
      }
    }
  }

  return (
    <div className="App">
      {getComponentToShow()}
    </div>
  );
}

export default App;
