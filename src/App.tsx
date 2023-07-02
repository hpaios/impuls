import React from 'react';
import './App.scss';
import { StartPage } from './components/StartPage';
import { useSelector } from 'react-redux';
import { QuestionList } from './components/QuestionList';
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState } from './store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const App = () => {

  const status = useAppSelector(state => state.game.status);
  const activeQuestion = useAppSelector(state => state.game.activeQuestion);

  const getComponentToShow = () => {
    switch(status) {
      case 'start': {
          return <StartPage />
      }
      case 'inProgress': {
          return <QuestionList activeQuestion={activeQuestion}/>
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
