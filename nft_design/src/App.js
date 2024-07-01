import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Carosle from './components/Carosle';
import Paint from './components/Paint';
import Thinking from './components/Thinking';
import Cards from './components/Cards';
import Messages from './components/Messages';
import SmallSlider from './components/SmallSlider';
import Counter from './components/Counter';
import Footer from './components/Footer';
import ThreeCards from './components/ThreeCards';
import Partner from './components/Partner';

function App() {
  return (
<div className='container-fluid'>
  <Navbar/>
  <Header/>
  <Partner />
  <Carosle/>
  <Paint/>
  <ThreeCards/>
  <Thinking/>
  
  <Cards/>
  <Counter/>
  <Messages/>
  <SmallSlider/>
  <Footer/>
</div>
  );
}

export default App;
