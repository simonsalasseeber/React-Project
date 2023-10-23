import {createStore, applyMiddleware, compose} from 'redux'; // para usar el redux dev tools en chrome 
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    );

export default store;