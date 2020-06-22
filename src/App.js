import React,{useState} from "react";
import ButtonGrid from "./components/ButtonGrid";
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = (props) => {

  const [search,Setsearch] = useState('');

  const handleChange = (event) => {
    //[event.target.name] = event.target.value;
    //console.log(search)
    Setsearch(event.target.value)
    const array1 = [{a: 1}, {b: 2}, {c :3}]
    
    function isCherries(fruit){
      return 
    }
    // for (let [key, value] of Object.entries(array1)) {
    //   if(`${key}` == search){
    //     console.log(`${value}`)
    //   }

    // }
  }
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-start mb-2">
        <span className="navbar-brand h1"><FaShoppingCart/></span>
        <span className="badge badge-pill badge-info">{props.noi}</span>
        Items
        <input type="text" placeholder="enter the item" onChange={handleChange} name="search" />
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
