
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const ADD_MESSAGE = "ADD-MESSAGE"

let inistionalState = {
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "www" },
        { id: "3", message: "wawawwawwaw" },
    ],

    dialogs: [
        { id: "1", name: "Oleg" },
        { id: "2", name: "Vlad" },
        { id: "3", name: "ilya" },
        { id: "4", name: "a" },
        { id: "5", name: "b" },
        { id: "6", name: "c" },
    ],

    newMessageText: "input text"

}

const dialogReducer = (state = inistionalState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = " ";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: return state;
    }
}

export const addMessageActionCreator = () =>{
    return{
        type:ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) =>{
    return{type:UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogReducer;
