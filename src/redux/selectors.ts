import { IState, ITodoItem, TCategory } from '../../types'

// Получаем категорию
export const getCategory = (state: IState, category: TCategory): Array<ITodoItem> =>
  state.board.filter((todo) => todo.category === category)
// Получаем название доски
export const getBoardTitle = (state: IState): string => state.boardTitle
