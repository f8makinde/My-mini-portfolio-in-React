import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import About from './About'
import Blog from './Blog'
function App(){
  return(
    <div className='container'>
      <Header /> 
      <About />
      <Blog />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))