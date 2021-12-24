import { IState, ITodoItem } from '../../types'
import { TUserProfileActionTypes } from './action-creators'
import { ADD_TO_DO, DELETE_TO_DO, SET_BOARD_TITLE, UPDATE_TO_TO } from './actions'

const initialState: IState = {
  boardTitle: '',
  board: []
}

// const updateToDo = (state: IState, payload: ITodoItem) => {
//   state.board.forEach((todo, index, board) => {
//     if (todo._id === payload._id) {
//       board[index] = payload
//     }
//   })
//   return state.board
// }

export const reducer = (state = initialState, action: TUserProfileActionTypes) => {
  switch (action.type) {
    case SET_BOARD_TITLE:
      return {
        ...state,
        boardTitle: action.boardTitle
      }
    case ADD_TO_DO:
      return {
        ...state,
        board: [...state.board, action.payload]
      }
    case UPDATE_TO_TO:
      return {
        ...state,
        board: state.board.map((todo) => {
          if (todo._id === action.payload._id) {
            return action.payload
          } else return todo
        })
      }
    case DELETE_TO_DO:
      return {
        ...state,
        board: state.board.filter((todo) => todo._id !== action.id)
      }
    default:
      return state
  }
}
