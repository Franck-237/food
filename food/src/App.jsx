import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

export default App;