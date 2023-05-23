import '../App.css'
import {
  Link,
  Navbar,
  Container,
  LinkContainer,
  Badge,
  Nav,
  useContext,
  useEffect,
  Store,
  LocationContext,
  addToCartHandler,
  axios
} from '../imports'

function NavBar () {
  const { state,dispatch:ctxDispatch } = useContext(Store)
  const { cart } = state

  const { currentLocation } = useContext(LocationContext)

  useEffect(() => {}, [currentLocation])

  function handleDragOver (e) {
    e.preventDefault()
  }
  async function handleDrop (e) {
    e.preventDefault();

    const productId = e.dataTransfer.getData('text/plain');

    const {data}= await axios.get(`/api/v1/products/${productId}`);
    await addToCartHandler(data,cart.cartItems,ctxDispatch)
  }
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        {/* Logo link */}
        <LinkContainer to='/'>
          <Navbar.Brand>Eshop</Navbar.Brand>
        </LinkContainer>

        <LinkContainer to='/'>
          {currentLocation && currentLocation === '/' ? (
            <span></span>
          ) : (
            <Link to='/'>Home</Link>
          )}
        </LinkContainer>
        {/* Cart icon */}
        <Nav
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='ms-auto w-50 justify-content-end'
        >
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
  )
}

export default NavBar
