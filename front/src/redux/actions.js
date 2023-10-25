export const ADD_FAV = "ADD_FAV";

export const addFav = (character) => {
    return { 
        type: ADD_FAV,
        payload: character,
    }
}

export const REMOVE_FAV = 'REMOVE_FAV';

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}

export const ORDER = 'ORDER';

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}

export const FILTER = 'FILTER';

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}