import React from 'react'
import Home from './Home'
import Searched from './Searched'
import { Route,Routes} from 'react-router-dom'
import Cuisine from './Cuisine'
import Recipe from './Recipe'

function Pages() {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cuisine/:type' element={<Cuisine/>} />
            <Route path='/searched/:search' element={<Searched/>} />
            <Route path='/recipe/:name' element={<Recipe/>} />
        </Routes>
    
  )
}

export default Pages