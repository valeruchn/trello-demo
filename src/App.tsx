import { Route, Routes } from 'react-router-dom'
import { Board, Greeting, NotExist } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </>
  )
}

export default App
