import { useFormikContext } from 'formik'
import React, { FC } from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { ITodoItem, TCategory } from '../../../../../types'

interface IProps {
  column: TCategory
  todoList: Array<ITodoItem>
  nextStage: string | null
}

interface IFormikValues {
  modalVisible: boolean
  _id: string
  category: string
  title: string
  body: string
  goTo: string
  option: string
}

const Column: FC<IProps> = ({ todoList, column, nextStage }) => {
  const { values, setFieldValue, setValues } = useFormikContext<IFormikValues>()

  const updateTodo = (
    title: string,
    body: string,
    _id: string,
    category: string,
    nextStage: string
  ) => {
    setValues({
      ...values,
      modalVisible: true,
      _id,
      title,
      body,
      goTo: nextStage,
      category
    })
  }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Header>{column}</Card.Header>
        <ListGroup variant="flush">
          {todoList.map((item, index) => (
            <ListGroup.Item key={index.toString()}>
              <Row>
                <Col>{item.title}</Col>
                <Col md="auto">
                  <span className="pull-right">
                    <span
                      className="btn btn-lrg btn-primary"
                      onClick={() =>
                        updateTodo(item.title, item.body, item._id, item.category, nextStage || '')
                      }
                    >
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </span>
                  </span>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {column === 'backlog' ? (
          <Button
            className="mt-1"
            variant="primary"
            onClick={() => setFieldValue('modalVisible', true)}
          >
            +
          </Button>
        ) : null}
      </Card>
    </div>
  )
}

export { Column }
