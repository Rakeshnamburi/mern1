import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Polling from './components/Polling';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Sucess1 from './components/Sucess1';
import Contact from './components/Contact';
import About from './components/About';
import Parties from './components/Parties';
import Homepage from './components/Homepage';
import Submit from './components/Submit';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>

    <main>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
        <Route path='/Polling' element={<Polling/>} exact/>
        <Route path='/Parties' element={<Parties/>} exact/>
        <Route path='/home' element={<Home/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/signin' element={<Signin/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path='/about' element={<About/>}exact/>
        <Route path='/Sucess1' element={<Sucess1/>}exact/>
        <Route path='/Homepage'element={<Homepage/>}exact/>
        <Route path='/Submit'element={<Submit/>}exact/>

      </Routes>
    </main>
    <footer>

    </footer>

  </React.Fragment>
}

export default App;