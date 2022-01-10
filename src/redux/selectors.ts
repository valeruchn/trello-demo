import { IState, ITodoItem, TCategory } from '../../types'

// Получаем категорию
export const getCategory = (state: IState, category: TCategory): Array<ITodoItem> =>
  state.board.filter((todo) => todo.category === category)
// Получаем массив для рендера досок
export const getColumns = (state: IState) => {
  return state.categories.map((category, index, categories) => {
    return {
      category,
      todoList: state.board.filter((todo) => todo.category === category),
      nextStage: categories[index + 1] ? categories[index + 1] : null
    }
  })
}
// Получаем название доски
export const getBoardTitle = (state: IState): string => state.boardTitle
