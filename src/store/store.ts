import { configureStore } from '@reduxjs/toolkit'
import gameSlice from '../reducers/gameSlice'

const store = configureStore({
    reducer: {
      game: gameSlice
    }
  })

export type RootState = ReturnType<typeof store.getState>

export default store;
