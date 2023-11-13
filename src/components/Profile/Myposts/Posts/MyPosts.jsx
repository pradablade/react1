import classes from "./MyPosts.module.css";
import Posts from "./Post";
import React from "react";
import {addPostActionCreator} from ".//../../../../Redux/ProfileReducer"
import {updateNewPostTextActionCreator} from ".//../../../../Redux/ProfileReducer"

const MyPosts = (props) => {

    let onPostChange = () => {
        let text = newPostElement.current.value
       props.updateNewPostText(text);
    }
    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost();
      }

    let PostsElement =
        props.posts.map((p) => <Posts message={p.message} likeCount={p.likes} />)

    return (
        <div className={classes.postblock}>
            <h3>my post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                {PostsElement}
            </div>
        </div>)
}


export default MyPosts;