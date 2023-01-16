import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

//여러개의 slice와 리듀서를 합치기
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
