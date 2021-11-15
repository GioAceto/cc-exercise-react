import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Home from './components/routes/Home';
import Schedule from './components/routes/Schedule';
import Registration from './components/routes/Registration';
import Share from './components/routes/Share';
import Galleries from './components/routes/Galleries';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='registration' element={<Registration />} />
          <Route path='share' element={<Share />} />
          <Route path='galleries' element={<Galleries />} />
        </Routes>
      </Router>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));


