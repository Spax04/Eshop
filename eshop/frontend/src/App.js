import './App.css'
import data from './data'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


function App () {
  console.log(data)

  return (
    <BrowserRouter>
    
    <div>
      <header>
        <Link to='/'>Eshop</Link>
      </header>
      <main>
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route path='/product/:token' element={<ProductPage/>}/>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
