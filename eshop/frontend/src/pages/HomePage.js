import { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//import logger from 'use-reducer-logger'

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_REQUEST':
      return { ...state, loading: true }
    case 'GET_SUCCSESS':
      return { ...state, product: action.payload, loading: false }
    case 'GET_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

function HomePage () {
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: ' ',
    product: []
  })

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: 'GET_REQUEST' })
      try {
        const res = await axios.get('/api/v1/products')
        dispatch({ type: 'GET_SUCCSESS', payload: res.data })
      } catch (error) {
        dispatch({ type: 'GET_REQUEST', payload: error.message })
      }
    }

    getProducts()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <div className='main-inner'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          // error? (<p>{error}</p>)
          // :
          <Row>
            {product.map(product => (
              <Col lg={3} md={4} sm={6}>
              <div className='products' key={product.token}>
                <Link to={`/product/${product.token}`}>
                  <img alt={product.name} src={product.producImg}></img>
                </Link>
                <div className='product-desc'>
                  <Link to={`/product/${product.token}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>{product.category}</p>
                  <p>
                    <strong>{product.price + '$'}</strong>
                  </p>
                </div>
                <button>Add to card</button>
              </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default HomePage
