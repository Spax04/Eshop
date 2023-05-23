import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
  HomePage,
  ProductPage,
  CartPage,
  Container,
  useContext,
  Store,
  NavBar,
  SigninPage
} from './imports'

function App () {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allpage'>
        <NavBar />
        <main>
          <Container className='mt-3'>
            {/* Routs */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/product/:token' element={<ProductPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/signin' element={<SigninPage />} />
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
