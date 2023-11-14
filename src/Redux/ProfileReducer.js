const ADD_POST = "ADD-POST"

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initionalState = {posts: [
    { id: "1", message: "u first", likes: "44" },
    { id: "2", message: "w?", likes: "148" },
    { id: "3", message: "dddd", likes: "228" },
],
newPostText: "New Post" }

const profileReducer = (state = initionalState , action) =>{
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default: return state;

    }
}
export const addPostActionCreator = () =>{
    return{
        type:ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return{type:"UPDATE-NEW-POST-TEXT", newText: text}
}

export default profileReducer
