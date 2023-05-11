import { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import logger from 'use-reducer-logger'

function Product () {
  return (
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
  )
}

export default Product
