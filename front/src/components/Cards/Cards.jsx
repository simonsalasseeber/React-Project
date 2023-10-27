import React from 'react';
import Card from '../Card/Card';
import './Cards.modules.css';

export default function Cards(props) {
   const {characters, onClose} = props;
   return <div className='cards-container'>
      {characters.map((char) => { // podria usar el index para ayudar a react a saber donde anda pero en cambio uso el id en key
         return <Card key={char.id} className='cards'
         id={char.id}
         name={char.name}
         status={char.status}
         species={char.species}
         gender={char.gender}
         origin={char.origin.name}
         image={char.image}
         onClose={onClose} /> // key es donde andamos y se usa siempre, ...character me permite traer tooodas las propiedades del objeto
      })};
   </div>
}
