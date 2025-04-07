import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import ProductReducer from "./Product/ProductReducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { thunk } from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage,
    blaklist : ['somthingTemporary']
  }
   

  const rootReducer = combineReducers({ auth:AuthReducer,product :ProductReducer})
  const persistedReducer = persistReducer(persistConfig, rootReducer);
 
  export const store = legacy_createStore(persistedReducer,applyMiddleware(thunk));



export const persistor = persistStore(store)




