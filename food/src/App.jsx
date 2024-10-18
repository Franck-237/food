import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from './components/Main';
import Newsletter from './components/Newsletter';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Header />
      <Main />
      <Newsletter />
    </div>
  )
}

export default App;