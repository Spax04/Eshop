import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

function App () {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allpage'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Eshop</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/product/:token' element={<ProductPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            ALL RIGHTS RESERVED
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
