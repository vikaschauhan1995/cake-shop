import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import productSaga from './Product/saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(productSaga);