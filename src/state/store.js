import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
// import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import { thunk } from "redux-thunk";
import customerProductReducer from "./customers/Product/Reducer";
import cartReducer from "./customers/Cart/Reducer";
import { orderReducer } from "./customers/Order/Reducer";
import ReviewReducer from "./customers/Review/Reducer";






const rootReducers=combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    review:ReviewReducer,

    // // adminD
    // adminsProduct:productReducer,
    // adminsOrder:adminOrderReducer,


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))