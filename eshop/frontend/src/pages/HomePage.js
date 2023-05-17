import { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from '../components/Product'
import Loading from '../components/Loading'
import { getError } from '../utils'
import MessageBox from '../components/MessageBox'

//import logger from 'use-reducer-logger'
const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_REQUEST':
      return { ...state, loading: true }
    case 'GET_SUCCESS':
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
    error: '',
    product: []
  })

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: 'GET_REQUEST' })

      try {
        const res = await axios.get(`/api/v1/products`) //try catch
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
          <MessageBox variant="danger">{error}</MessageBox>
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
