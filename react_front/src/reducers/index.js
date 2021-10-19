import { combineReducers } from 'redux';
import userReducer from './userReducer';
import proyectoReducer from './proyectoReducer'

export default combineReducers({
    userReducer,
    proyectoReducer
})