import { IState, ITodoItem, TInferActionsTypes } from '../../types'
import { ADD_TO_DO, DELETE_TO_DO, SET_BOARD_TITLE, UPDATE_TO_TO } from './actions'

const actionsCreators = {
  setBoardTitle: (boardTitle: string) => ({
    type: SET_BOARD_TITLE,
    boardTitle
  }),
  addTodo: (payload: ITodoItem) => ({
    type: ADD_TO_DO,
    payload
  }),
  updateTodo: (payload: ITodoItem) => ({
    type: UPDATE_TO_TO,
    payload
  }),
  deleteTodo: (id: string) => ({
    type: DELETE_TO_DO,
    id
  })
}

export type TUserProfileActionTypes = TInferActionsTypes<typeof actionsCreators>

export { actionsCreators }
