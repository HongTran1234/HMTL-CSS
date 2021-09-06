import rootReducer from "./reducers/index2";
import { createStore } from 'redux'
const store = createStore(rootReducer)
export default store