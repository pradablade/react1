import "./Profile.module.css"
import classes from "./Profile.module.css"
import MyPosts from "./Myposts/Posts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"



const Profile = (props) => {

console.log(props.addPosts)

  return (<div className={classes.content}>
    <ProfileInfo />
    <MyPosts posts={props.state.posts} addpost={props.addPosts}/>
  </div>)
}

export default Profile;