import { createStore, combineReducers } from "redux"
import { root } from "./reducers"
const allCombine = combineReducers({
    first: root,

})
const store = createStore(
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); export default store;
