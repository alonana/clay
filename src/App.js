import React from 'react'
import logo from './logo.png'
import './App.css'
import {Steps} from './features/steps/component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Steps/>
      </header>
    </div>
  )
}

export default App
