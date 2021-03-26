import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Header } from './views/Header';
import { Main } from './views/Main';
import { Footer } from './views/Footer';

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
