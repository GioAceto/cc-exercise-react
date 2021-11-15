import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import NavBar from './components/NavBar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Hero />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


