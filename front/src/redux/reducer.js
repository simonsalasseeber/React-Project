import { ADD_FAV, REMOVE_FAV, CLEAN_FAVS, FILTER, ORDER, ACCESS } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    access: false,
}

const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case ADD_FAV: 
        return {...state, myFavorites: [...state.myFavorites, action.payload], allCharacters: [...state.allCharacters, action.payload] };// si no lo traigo así, se sobreescribiría toda la lista. tenia myfavorites: 
    case REMOVE_FAV:
        const idToRemove = Number(action.payload); // Convierte el id a número
            const updatedFavorites = state.myFavorites.filter(character => character.id !== idToRemove); // dejo los favoritos menos el que recibo x payload
            return {...state, myFavorites: updatedFavorites, allCharacters: updatedFavorites };
    case FILTER:
        let copy = [...state.allCharacters];
        let filtered = copy.filter((e) => {
        return e.gender === action.payload; }) 
        return {
            ...state, myFavorites: filtered} // solo modifico uno porque sino una vez filtrado, no hay otros personajes
    case ORDER:
        let copy2 = [...state.allCharacters];
        return {
            ...state, myFavorites: copy2.sort((a,b) => { 
                return action.payload === 'A' ? a.id - b.id : b.id - a.id})
        }
         // si es A, hace a menos b (primer elemento menos segundo, si da positivo los intercambia)
         // si es B, a la inversa. acostumbrarse a usar estos operadores ternarios. tambien se puede con un if.
    case ACCESS:
        return {
            ...state,
            access: action.payload,
        }
    case CLEAN_FAVS:
        return {
            ...state,
            myFavorites: action.payload,
        }
        default:
        return { ...state};
}
}

export default rootReducer;