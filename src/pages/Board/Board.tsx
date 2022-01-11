import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { actionsCreators, getBoardTitle, getColumns } from '../../redux'
import { Column } from './components'
import { Header } from '../../components/common'
import { TCategory } from '../../../types'

const Board = () => {
  // Решение задачи с собеседования :)

  // const test = 'aaassdzwwwwx'

  // const getSimbolsCount = (text: string) => {
  //   const arraySimbols = text.split('')
  //   let result = ''
  //   for (let i = 0; i < arraySimbols.length; i++) {
  //     if (arraySimbols[i] !== result.slice(-1)) {
  //       result += `1${arraySimbols[i]}`
  //     } else {
  //       const currentCount = +result.slice(-2, -1)
  //       result = result.slice(0, -2) + (currentCount + 1) + arraySimbols[i]
  //     }
  //   }
  //   return result
  // }
  // console.log(getSimbolsCount(test))

  const { addTodo, updateTodo, deleteTodo } = actionsCreators
  // Получаем категории
  const columns = useSelector(getColumns)
  // Получаем название доски
  const boardName = useSelector(getBoardTitle)

  const dispatch = useDispatch()

  return (
    <div>
      <Formik
        initialValues={{
          modalVisible: false,
          _id: '',
          category: '' as TCategory,
          title: '',
          body: '',
          goTo: '' as TCategory,
          option: ''
        }}
        onSubmit={(values, action) => {
          if (values.option === 'create') {
            const payload = {
              _id: uuidv4(),
              category: 'backlog' as const,
              title: values.title,
              body: values.body
            }
            dispatch(addTodo(payload))
            action.resetForm()
          }
          if (values.option === 'update') {
            const payload = {
              _id: values._id,
              category: values.category,
              title: values.title,
              body: values.body
            }
            dispatch(updateTodo(payload))
            action.resetForm()
          }
          if (values.option === 'goTo') {
            const payload = {
              _id: values._id,
              category: values.goTo ? values.goTo : values.category,
              title: values.title,
              body: values.body
            }
            dispatch(updateTodo(payload))
            action.resetForm()
          }
          if (values.option === 'delete') {
            dispatch(deleteTodo(values._id))
            action.resetForm()
          }
        }}
      >
        {({ handleSubmit, values, setFieldValue, setValues, resetForm }) => (
          <>
            <Container>
              <div className="mb-2">
                <Header boardName={boardName} />
              </div>

              <Row>
                {columns.map((column, index) => (
                  <Col key={index.toString()}>
                    <Column
                      todoList={column.todoList}
                      column={column.category}
                      nextStage={column.nextStage}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
            <Modal show={values.modalVisible} onHide={() => resetForm()}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {!values._id ? <>Создать задачу</> : <>Обновить задачу</>}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs lg="12" className="col">
                      <Form.Group className="mb-3" controlId="formBasicBoardTitle">
                        <Form.Label>Введите заголовок</Form.Label>
                        <Form.Control
                          type="text"
                          value={values.title}
                          onChange={(e) => setFieldValue('title', e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs lg="12" className="col">
                      <Form.Group className="mb-3" controlId="formBasicBoardTitle">
                        <Form.Label>Введите описание</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={values.body}
                          onChange={(e) => setFieldValue('body', e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                {values._id ? (
                  <>
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        e.preventDefault()
                        setFieldValue('option', 'delete')
                        handleSubmit()
                      }}
                    >
                      Удалить
                    </Button>
                    {values.goTo ? (
                      <>
                        <Button
                          variant="success"
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault()
                            setFieldValue('option', 'goTo')
                            handleSubmit()
                          }}
                        >
                          завершить этап
                        </Button>
                      </>
                    ) : null}
                    <Button
                      variant="primary"
                      onClick={(e) => {
                        e.preventDefault()
                        setFieldValue('option', 'update')
                        handleSubmit()
                      }}
                    >
                      Сохранить
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      setFieldValue('option', 'create')
                      handleSubmit()
                    }}
                  >
                    Сохранить
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
          </>
        )}
      </Formik>
    </div>
  )
}

export { Board }
