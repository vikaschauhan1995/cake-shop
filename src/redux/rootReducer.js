import { combineReducers } from "redux";
import { reducer as productReducer } from './Product/reducer';
import { PRODUCT_REDUCER } from './Product/const';

export default combineReducers({ [PRODUCT_REDUCER]:productReducer });