import classes from "./Navbar.module.css"
import { Link, NavLink } from "react-router-dom";
import FriendsBar from "./friendsBar/friendsBar";

const setActive = ({isActive}) => (isActive ? `${classes.active}` : "")


const Nav = (props) => {
  return (<nav className={classes.nav}>
    <div className={`${classes.item}`}>
      <NavLink to="profile" className = {setActive}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="dialogs" className={setActive}>Dialogs</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink className={setActive} to="News">News</NavLink>
    </div>
    <div className={classes.item}>
      Music
    </div>
    <div className={classes.item}>
      Settings
    </div>
    <div>
      <FriendsBar state={props.state.friends}/>
    </div>
  </nav>)
}



export default Nav;

console.log(`${classes.active}`)