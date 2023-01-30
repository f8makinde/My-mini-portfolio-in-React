import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import About from './About'
function App(){
  return(
    <div className='container'>
      <Header /> 
      <About />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))