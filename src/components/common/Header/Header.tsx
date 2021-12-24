import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

interface IProps {
  boardName: string
}

const Header: FC<IProps> = ({ boardName }) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink style={{ textDecoration: 'none' }} to="/">
              <Navbar.Brand>Доска: {boardName}</Navbar.Brand>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export { Header }
