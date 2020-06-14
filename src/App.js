import React,{useState} from "react";
import ButtonGrid from "./components/ButtonGrid";
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-start mb-2">
        <span className="navbar-brand h1"><FaShoppingCart/></span>
        <span className="badge badge-pill badge-info">{props.noi}</span>
        Items
      </nav>
    </div>
  );
};

function App() {

  const [noi,Setnoi]= useState(0);
  const count = new Set()

  const handleNoi = (newValue,i) => {

    if(newValue === 1){
      count.add(i)
    }
    if(newValue === -1){
      count.delete(i)
    }
    Setnoi(count.size)
  }

  return (
    <div>
      <Navbar noi={noi}/>
      <ButtonGrid handleNoi={handleNoi}/>
    </div>
  );
}

export default App;
