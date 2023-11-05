import classes from "./Post.module.css";

const Posts = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://preview.redd.it/finally-got-a-personal-grail-of-mine-fw14-acne-studios-v0-w7q690gw34oa1.jpg?width=640&crop=smart&auto=webp&s=942f4c5f4f29220858bad89c01cca37c1cfeddef" />
            {props.message} 
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}


export default Posts;