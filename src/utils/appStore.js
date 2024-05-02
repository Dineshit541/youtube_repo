import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import appReducer from "./appSlice";

const store =configureStore({
       reducer:{
          search:searchReducer,
          app:appReducer
       }
});

export default store;