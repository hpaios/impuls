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
        },
        nextQuestion: {
          reducer(state: any, action: any) {
            
              const newActive = state.data.data.find((item: { id: any; }): any => item.id == action.payload)
            
              if(newActive) {
                  const newState =  {...state, activeQuestion: newActive, prize: newActive.prize }
                  return newState
              } else {
                  const newState = {...state, status: 'finish'}
                  return newState
              }
            },
            prepare(payload: any) {
              return { payload }
            }
        },
        changeStatus: {
          reducer(state: any, action: any) {
              const status = action.payload === 'finish' ? 'finish' : 'inProgress'
              return {...state, status}
          },
          prepare(payload: any) {
            return { payload }
          },
        },
        changePrize: {
          reducer(state: any, action: any) {
            return {...state, prize: action.payload}
          },
          prepare(payload: any) {
            return { payload }
          },
        }
      }
})

export const { startGame, nextQuestion, changeStatus, changePrize } = gameSlice.actions;

export default gameSlice.reducer
