import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from './components/Main';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Header />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App;