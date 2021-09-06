import { combineReducers } from "redux";
import hobbyReducer from "../reducers/hobby";
import hobbyUser from "../reducers/user";
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: hobbyUser
})
export default rootReducer