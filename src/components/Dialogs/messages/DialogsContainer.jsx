import React from "react";
import {addMessageActionCreator} from ".//../../../Redux/DialogReducer"
import {updateNewMessageTextActionCreator} from ".//../../../Redux/DialogReducer"
import Dialogs from "../Dialogs";
import { connect } from "react-redux";



let mapStateToProps =  (state) =>{
    return{
        dialogs: state.dialogsPage.dialogs, 
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onChange:(text) => {
                let action = (updateNewMessageTextActionCreator(text))
                dispatch(action)},
        onSendMessage:() => {dispatch(addMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps , mapDispatchToProps)(Dialogs)

export default DialogsContainer; 