import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import './Favorites.modules.css';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites); // accedo estado global, propiedad myFavorites
    const dispatch = useDispatch(); // me traigo el despatch a react
    const [aux, setAux] = useState(false); // creo estado local auxiliar


    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value)); // le pasa el evento recibido al reducer asi sabe que caso manejar
      setAux(!aux); //lo invierte. cuando cambia el estado de un componente, se vuelve a renderizar. CADA vez que el aux varíe se re-renderiza y eso es lo que necesitamos.
   }

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value))
    }


    return <div className='container'>
    <div className='selector-container'>
      <select onChange={handleOrder}>
      <option value='A'>Ascendente</option>
      <option value='D'>Descendente</option>
    </select>
    <select onChange={handleFilter}>
      <option value='All'>All Favs</option>
      <option value='Male'>Male</option>
      <option value='Female'>Female</option>
      <option value='Genderless'>Genderless</option>
      <option value='unknown'>unknown</option>
    </select>
    </div>
    <div className='card-container'>
    {myFavorites.map((char) => { // podria usar el index para ayudar a react a saber donde anda pero en cambio uso el id en key
       return <Card key={char.id} className='cards'
       id={char.id}
       name={char.name}
       status={char.status}
       species={char.species}
       gender={char.gender}
       origin={char.origin.name}
       image={char.image}/> // key es donde andamos y se usa siempre, ...character me permite traer tooodas las propiedades del objeto
    })};
 </div>;
 </div>
}

export default Favorites;