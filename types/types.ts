// Категории
export type TCategory = 'backlog' | 'progress' | 'test' | 'done'
// элемент задания
export interface ITodoItem {
  _id: string
  category: TCategory
  title: string
  body: string
}
// state
export interface IState {
  boardTitle: string
  board: Array<ITodoItem>
}
// Для выведения типов actions из обьекта с actionCreators
export type TPropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type TInferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  TPropertiesTypes<T>
>
