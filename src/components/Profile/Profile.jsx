import "./Profile.module.css"
import classes from "./Profile.module.css"
import MyPosts from "./Myposts/Posts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./Myposts/Posts/MyPostsContainer"



const Profile = (props) => {
  console.log(props)
  return (<div className={classes.content}>
    <ProfileInfo />
    <MyPostsContainer store={props.store} dispatch = {props.dispatch}/>
  </div>)
}

export default Profile;