import data from '../data'
import {Link} from 'react-router-dom'


function HomePage () {
  console.log(data)

  return (
    <div>
        <h1>Products</h1>
        <div className='main-inner'>
          {data.products.map(product => (
            <div className='products' key={product.token}>
              <Link to={`/product/${product.token}`}>
                <img alt={product.name} src={product.producImg}></img>
              </Link>
              <div className='product-desc'>
              <Link to={`/product/${product.token}`}>
                <p>{product.name}</p>
              </Link>
                <p>{product.category}</p>
                <p><strong>{product.price + '$'}</strong></p>
              </div>
              <button>Add to card</button>
            </div>
          ))}
        </div>

    </div>
   
  )
}

export default HomePage
