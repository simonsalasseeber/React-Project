import { ADD_FAV, REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case ADD_FAV: 
        return {...state, myFavorites: [...state.myFavorites, action.payload] };// si no lo traigo así, se sobreescribiría toda la lista
    case REMOVE_FAV:
        const idToRemove = Number(action.payload); // Convierte el id a número
            const updatedFavorites = state.myFavorites.filter(character => character.id !== idToRemove); // dejo los favoritos menos el que recibo x payload
            return {...state, myFavorites: updatedFavorites };
    default:
        return { ...state};
}
}

export default rootReducer;