import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { actionsCreators } from '../../redux'

const Greeting = () => {
  const { setBoardTitle } = actionsCreators
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [isValidInput, setIsValidInput] = useState(true)
  const addBoardTitle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, title: string) => {
    e.preventDefault()
    if (title && title.length > 2) {
      dispatch(setBoardTitle(title))
      setTitle('')
      navigate('/board')
    } else {
      setIsValidInput(false)
    }
  }
  return (
    <div>
      <Container style={containerStyles}>
        <Form>
          <Row className="justify-content-md-center">
            <Col xs lg="12" className="col">
              <Form.Group className="mb-3" controlId="formBasicBoardTitle">
                <Form.Label>Введите название доски:</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="12">
              <Button variant="primary" type="submit" onClick={(e) => addBoardTitle(e, title)}>
                Отправить
              </Button>
            </Col>
          </Row>
          {!isValidInput ? (
            <Row className="justify-content-md-center">
              <Col xs lg="12">
                <div style={alertStyles}>
                  <Alert variant="warning">Имя доски должно быть длинее 2 символов</Alert>
                </div>
              </Col>
            </Row>
          ) : null}
        </Form>
      </Container>
    </div>
  )
}

export { Greeting }

const containerStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
} as const

const alertStyles = {
  width: '100%',
  // 'font-size': 12,
  'margin-top': 10
}
