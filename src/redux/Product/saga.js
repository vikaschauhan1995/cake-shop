import {
  ADD_TO_PRODUCT_LIST,
  GET_PRODUCT_LIST,
  PRUDUCT_LAZY_DATA_LOAD,
  PRODUCT_LAZY_DATA_LOAD_SUCCESS,
  PRODUCT_LAZY_DATA_LOAD_ERROR
} from "./const";
import { takeLatest, put } from 'redux-saga/effects';
import { fetchProductList } from "../../utils/fetchProductList";
// import { useDispatch } from "react-redux"; 

// const dispatch = useDispatch();
function* getProductList(params) {
  try {
    yield put({ type: PRUDUCT_LAZY_DATA_LOAD });
    const { pageNum, number_of_items_on_pages } = params?.payload;
    const items = yield fetchProductList(pageNum, number_of_items_on_pages);
    yield put({ type: ADD_TO_PRODUCT_LIST, payload: items });
    yield put({ type: PRODUCT_LAZY_DATA_LOAD_SUCCESS });
  } catch (e) {
    console.log('There is somethig error while fetching product list Error: ', e);
    yield put({ type: PRODUCT_LAZY_DATA_LOAD_ERROR, payload: "Product fetch error, check logs" });
  }
}


export default function* saga() {
  yield takeLatest(GET_PRODUCT_LIST, getProductList);
}