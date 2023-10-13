import {configureStore} from "@reduxjs/toolkit";
import { commonReducer } from "./reducer/commonReducer";

const store = configureStore({
    reducer:{
        commonReducer
    }
})

export default store;