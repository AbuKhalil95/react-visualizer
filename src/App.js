import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Header } from './view/Header';
import { Main } from './view/Main';
import { Footer } from './view/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
