import {combineReducers, createStore} from "redux";
import {someReducer} from "./reducers/someReducer";

const reducers = combineReducers({
    some: someReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store