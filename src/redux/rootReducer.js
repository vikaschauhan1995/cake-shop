import { combineReducers } from "redux";
import { reducer as productReducer } from './Product/reducer';

export default combineReducers({ productReducer });