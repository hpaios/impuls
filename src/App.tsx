import React from 'react'
import './App.scss'
import { StartPage } from './components/StartPage'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import { Main } from './components/Main'
import { type RootState } from './store/store'
import { FinishPage } from './components/FinishPage'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const App = () => {

  const status = useAppSelector(state => state.game.status)
  const getComponentToShow = () => {
    switch (status) {
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
      {getComponentToShow()}
    </div>
  )
}

export default App
