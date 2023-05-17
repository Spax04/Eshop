import { useEffect, useReducer, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating'
import { Store } from '../store'
//import logger from 'use-reducer-logger'

function Product (props) {
  // Adding element to Cart
  const { state, dispatch: cxtDispatch } = useContext(Store)

  const addToCartHandler = () => {
    cxtDispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } })
  }

  const { product } = props
  return (
    <Card className='product-card'>
      <div className='div-img'>
      <Link to={`/product/${product.token}`}>
        <Card.Img variant='top' alt={product.title} src={product.image}></Card.Img>
      </Link>
      </div>
      <Card.Body>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Card.Text>{product.price + '$'}</Card.Text>
        <Button onClick={addToCartHandler}>Add to card</Button>
      </Card.Body>
      <Rating
        rating={product.rating.rate}
        numOfReviews={product.rating.count}
      />
    </Card>
  )
}

export default Product
