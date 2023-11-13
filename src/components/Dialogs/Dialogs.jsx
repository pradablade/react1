import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import Message from "./messages/Message";
import DialogItem from "./dialogItem/DialogItem";
import React from "react";


const Dialogs = (props) => {
    
console.log(props)

    let onChange = () =>{
        let text = newMessageElement.current.value
        props.onChange(text)
    }

    let newMessageElement = React.createRef();

    let sendMessage = () =>{
        props.onSendMessage()
    }

    let dialogsElements = props.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messages.map((m) => <Message message={m.message} />)
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement} onChange={onChange}/>
            <button onClick={sendMessage}>show</button>
        </div>
    )
}

export default Dialogs; 