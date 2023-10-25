import { Link } from "react-router-dom";
import './Card.modules.css';
import { useDispatch, useSelector } from 'react-redux';
import {addFav, removeFav} from '../../redux/actions';
import { useState, useEffect } from "react";

const Card = (props) => {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   const characters = useSelector((state) => state.characters);
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch(); // le doy a REACT la capacidad de hacer dispatch

   const [isFav, setIsFav] = useState(false); // inicializo en false
   const handleFavorite = () => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav(props)); // si está true, está el favorito, lo elimina, sino lo agrega
      setIsFav(!isFav); // setea el reverso
   } // si NO usara el dispatch, no modifico el estado global!!!

   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]); // si algun favorito coincide con el id del character actual, el estado isFav se vuelve true

   return (
      <div className="card-container">                                           
         {isFav ? (
      <button onClick={handleFavorite}>❤️</button> // si es fav se muestra esto, sino el blanco
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      )}

         <div className="button">
            <button className="button-container" activeclassName='active' onClick={ () => { handleFavorite(); onClose(id); }}>X</button>
         </div>
         <div>
            <img src={image} alt='imagen' />
         </div>
         
         <Link to={`/detail/${id}`}> 
         <h2>{name}</h2>
         </Link> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         
         
      </div>
   );
}

export default Card;