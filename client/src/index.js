import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


