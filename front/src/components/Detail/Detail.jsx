import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams();// usando destructuring me traigo el id, va entre corchetes pq useParams es un objeto
    const [character, setCharacter]= useState({}); // inicio estado local para estar en un personaje
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); // este useEffect es el que va a la api a buscar lo que me sirve una vez montado el componente
                // se la pasa id al arreglo así el efecto se ejecuta cada vez que cambia el id
  return ( // aca dentro va siempre el html a renderizar
            // el character? se fija si ya se cumplió la promesa del useEffect y, en efecto, hay un character en mi estado local
            // si lo hay, voy a mostrar todo esto que está acá abajo. tambien se puede hacer con un loading.
    <div className="card-container">  
            <h2>{character?.name}</h2> 
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.status}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character?.image} alt='' />
    </div>
  )
}

export default Detail