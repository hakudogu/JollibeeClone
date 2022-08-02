import React from 'react';
import './App.css';
import { Navbar,Brand,Cta,Feature,Article, } from './components';
import {Footer} from './container'
const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <Brand/>
      <Cta/>
      <Feature/>
      <Article/>   
      <Footer/>   
      

      
    </div>
  );
}

export default App;
