import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './Favorites.modules.css';

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    
    return <div className='cards-container'>
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
}

export default Favorites;