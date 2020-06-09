import React,{useState} from "react";
import ButtonGrid from "./components/ButtonGrid";
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-start mb-2">
        <span className="navbar-brand h1"><FaShoppingCart/></span>
        <span className="badge badge-pill badge-info">2</span>
        Items
      </nav>
    </div>
  );
};



function App() {

  const [noi,Setnoi]= useState(0)

  const handleNoi = (newValue) => {
    Setnoi(newValue)
  }

  return (
    <div>
      <Navbar noi={noi}/>
      <ButtonGrid handleNoi={handleNoi}/>
    </div>
  );
}

export default App;
