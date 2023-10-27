import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import PATHROUTES from './helpers/PathRoutes.helper';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';
import useLogin from './components/Login/Login';

function App() {

   const[characters, setCharacter] = useState([]); // es un hook. defino como se maneja la variable que se está buscando, inicializándola vacía
   const APIKEY = "pi-hx-simonsalasseeber";
   const login = useLogin();

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}?key=${APIKEY}`).then(({ data }) => {
            if (data.name) {
               setCharacter((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      } // esto es una PROMESA, que son justo eso, asíncronas: el .then es lo que se hace si es una promesa exitosa
     
   const onClose = (id) => {
      setCharacter(
      characters.filter((char) => {
         return char.id !== Number(id)  // este boton cierra el character actual y deja el resto abierto
   }));
}

   const location = useLocation();
   const isNotRoot = location.pathname !== '/';
    
   
   return (
      <div className='App'>
         {isNotRoot && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
      
            <Route path={PATHROUTES.HOME} element={<Cards characters={characters} //mi home muestra las cards
            onClose={onClose} />} /> 

            <Route path={PATHROUTES.ABOUT} element={<About/>} /> 
            
            <Route path={PATHROUTES.DETAIL} element={<Detail/>} />

            <Route path={PATHROUTES.FAVORITES} element={<Favorites/>} />

            

         </Routes>
      </div>
   ) // paso el cards, about y detail en </> porque eso permite crear instancias unicas cuando se necesita para c personaje
}

export default App;
