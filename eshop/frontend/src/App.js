import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import { Badge, Nav } from 'react-bootstrap'
import { useContext } from 'react'
import { Store } from './store'

function App () {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allpage'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            {/* Logo link */}
            <LinkContainer to='/'>
              <Navbar.Brand>Eshop</Navbar.Brand>
            </LinkContainer>

            {/* Cart icon */}
            <Nav className='ms-auto w-50 justify-content-end'>
              <Link to='/cart' className='nav-link'>
                <i className='fas fa-shopping-cart'></i>
                {cart.cartItems.length > 0 && (
                  <Badge pill bg='danger'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <main>
          <Container className='mt-3'>
             {/* Routs */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/product/:token' element={<ProductPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>ALL RIGHTS RESERVED</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
