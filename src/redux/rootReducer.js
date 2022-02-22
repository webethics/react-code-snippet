import { combineReducers } from "redux";
import { Reducer1, Reducer2, Reducer3, Reducer4 } from "./projectName/reducer"

const rootReducer = combineReducers({
    Reducer1, Reducer2, Reducer3, Reducer4 
})

export default rootReducer