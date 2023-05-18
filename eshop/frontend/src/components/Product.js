import { useEffect, useReducer, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating'
import { Store } from '../store'
//import logger from 'use-reducer-logger'

function Product (props) {
  const navigate = useNavigate()
  // Adding element to Cart
  const { state, dispatch: cxtDispatch } = useContext(Store)

  const { cart } = state
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find(x => x._id === product._id)

    const quantity = existItem ? existItem.quantity + 1 : 1

    // const {data} = await

    if (product.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock')

      return
    }

    cxtDispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: quantity }
    })
    navigate('/cart')
  }

  const { product } = props
  return (
    <Card className='product-card'>
      <div className='div-img'>
        <Link to={`/product/${product.token}`}>
          <Card.Img
            variant='top'
            alt={product.title}
            src={product.image}
          ></Card.Img>
        </Link>
      </div>
      <Card.Body>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Card.Text>{product.price + '$'}</Card.Text>
        <Rating
          rating={product.rating.rate}
          numOfReviews={product.rating.count}
        />
        {product.countInStock > 0 ? (
          <Button onClick={addToCartHandler}>Add to card</Button>
        ) : (
          <Button onClick={addToCartHandler} variant='white' disabled={true}>
            Out of Stock
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default Product
