import Posts from "./Post";
import React from "react";
import { addPostActionCreator } from ".//../../../../Redux/ProfileReducer"
import { updateNewPostTextActionCreator } from ".//../../../../Redux/ProfileReducer"
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts:state.profilePage.posts, 
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText:(text) => { 
            let action = (updateNewPostTextActionCreator(text))
            dispatch(action)
        },

        addPost:() =>{
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps , mapDispatchToProps)(MyPosts);



export default MyPostsContainer;