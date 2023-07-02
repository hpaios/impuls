import { RootState } from './../store/store';
import { createSlice } from '@reduxjs/toolkit'
import data from '../api/api.json'
import { InitialState } from '../ts/interfaces'


const fetchFirstLevel = () => {
    return data.data.find(item => item.id === 'level_1')
}

const initialState: InitialState = {
    data: null,
    activeQuestion: null,
    status: 'start',
    prize: null
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame: {
            reducer(state: any) {
              const first = fetchFirstLevel()
              const newState = {...state, data, status: 'inProgress', activeQuestion: first}
              return newState
            },
            prepare(payload?: string) {
              return { payload }
            }
        }
    }
})

export const { startGame } = gameSlice.actions;

export default gameSlice.reducer
