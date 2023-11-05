import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import Message from "./messages/Message";
import DialogItem from "./dialogItem/DialogItem";
import React from "react";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let showMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text)
    }

    let dialogsElements = props.state.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages.map((m) => <Message message={m.message} />)
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}>message</textarea>
            <button onClick={showMessage}>show</button>
        </div>
    )
}

export default Dialogs; 