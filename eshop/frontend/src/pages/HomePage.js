import {
  useEffect,
  useReducer,
  useContext,
  useLocation,
  axios,
  Row,
  Col,
  Product,
  Loading,
  getError,
  MessageBox,
  UploadingReducer
} from '../imports'

//TODO: export all case strings into const!!!

function HomePage () {
  const [{ loading, error, product }, dispatch] = useReducer(UploadingReducer, {
    loading: true,
    error: '',
    product: []
  })








  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: 'GET_REQUEST' })

      try {
        const res = await axios.get(`/api/v1/products`)
        dispatch({ type: 'GET_SUCCESS', payload: res.data })
      } catch (err) {
        dispatch({ type: 'GET_FAIL', payload: getError(err) })
      }

      //setProducts(res.data);
    }
    getProducts()

  }, [])

  return (
    <div>
      <h1>Products</h1>
      <div className='main-inner'>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <Row>
            {product.map(product => (
              <Col key={product.token} lg={3} md={4} sm={6}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default HomePage
