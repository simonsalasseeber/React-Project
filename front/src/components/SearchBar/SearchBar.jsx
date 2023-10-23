import { useState } from "react";
import './SearchBar.modules.css';

const SearchBar = (props) => {
   const[id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }
   const {onSearch} = props; // sigue el tobogán
   return ( // renderizo SearchBar (ahora va a estar dentro de este componente Nav -highOrderComponent)
      <div className="search-container"> 
         <input type='search' placeholder='Write id...' onChange={handleChange} value={id} className="search-input"/> 
         <button onClick={() => onSearch(id)} className="search-button">Submit</button> 
      </div>
   );
   };

export default SearchBar;