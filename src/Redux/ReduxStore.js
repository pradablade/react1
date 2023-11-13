import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./ProfileReducer"
import dialogReducer from "./DialogReducer"
import navReducer from "./NavReducer"


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navBar:navReducer
    
});

let store = createStore(reducers)



export default store