import { NavLink } from "react-router-dom"
import classes from "./friendsBar.module.css"
import FriendsBarElement from "./friendsBarElement"


const FriendsBar = (props) =>{
    let friendsBarElement = props.state.map((f) => <FriendsBarElement ava={f.avatarimage} id={f.id} />)
    return(
    <div className={`${classes.item} ${classes.friends}`}>
    firends
        <div className={classes.friends}> 
            {friendsBarElement}
        </div>
   </div>
    )
  }

  export default FriendsBar;