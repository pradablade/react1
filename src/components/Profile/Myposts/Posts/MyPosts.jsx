import classes from "./MyPosts.module.css";
import Posts from "./Post";
import React from "react";




const MyPosts = (props) => {

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addpost(text)
        newPostElement.current.value = ""
      }

    let PostsElement =
        props.posts.map((p) => <Posts message={p.message} likeCount={p.likes} />)

    return (
        <div className={classes.postblock}>
            <h3>my post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                {PostsElement}
            </div>
        </div>)
}


export default MyPosts;