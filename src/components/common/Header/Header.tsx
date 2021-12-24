import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { getBoardTitle } from '../../../redux'

const Header = () => {
  const boardName = useSelector(getBoardTitle)
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="/">Доска: {boardName}</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export { Header }
