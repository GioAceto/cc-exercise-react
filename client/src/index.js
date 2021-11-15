import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import NavBar from './components/NavBar'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));


