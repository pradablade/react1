import { NavLink } from "react-router-dom";


const FriendsBarElement = (props)=>{
    console.log(props)
    return(
        <div>
        <NavLink to={`profile-${props.id}`}>
       <img src={`${props.ava}`} alt="" />
       </NavLink>
       </div>
    )
}

export default FriendsBarElement;