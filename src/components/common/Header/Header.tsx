import React, { FC, memo } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

interface IProps {
  boardName: string
}

const HeaderComponent: FC<IProps> = ({ boardName }) => {
  console.log('header test')
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

const Header = memo(HeaderComponent)

export { Header }
