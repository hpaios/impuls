import { createSlice } from '@reduxjs/toolkit'
import data from '../api/api.json'

export interface Question {
  question: string
  answers: {
    a: string
    b: string
    c: string
    d: string
  }
  answer: string
  id: string
  nextLevelId: string
  prize: string
}

export interface InitialState {
  data: Question[] | null
  activeQuestion: Question | null
  status: string
  prize: string | null
}

const initialState: InitialState = {
  data: null,
  activeQuestion: null,
  status: 'start',
  prize: null
}

const fetchFirstLevel = () => {
  return data.data.find(item => item.id === 'level_1')
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
      reducer (state) {
        const first = fetchFirstLevel()
        const newState = { ...state, data, status: 'inProgress', activeQuestion: first }
        return newState
      },
      prepare (payload?: string | undefined) {
        return { payload }
      }
    },
    nextQuestion: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      reducer (state, action) {

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const newActive = state.data.data.find((item: { id: any }): any => item.id === action.payload)
            
        if (newActive) {
          const newState = { ...state, activeQuestion: newActive, prize: newActive.prize }
          return newState
        } else {
          const newState = { ...state, status: 'finish' }
          return newState
        }
      },
      prepare (payload: string) {
        return { payload }
      }
    },
    changeStatus: {
      reducer (state, action) {
        const status = action.payload === 'finish' ? 'finish' : 'inProgress'
        return { ...state, status }
      },
      prepare (payload) {
        return { payload }
      }
    },
    changePrize: {
      reducer (state, action) {
        return { ...state, prize: action.payload }
      },
      prepare (payload) {
        return { payload }
      }
    }
  }
})

export const { startGame, nextQuestion, changeStatus, changePrize } = gameSlice.actions

export default gameSlice.reducer
