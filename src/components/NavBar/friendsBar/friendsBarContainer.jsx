import { connect } from "react-redux";
import FriendsBar from "./friendsBar";

let mapStateToProps = (state) => {
    return(
        state
    )
}


const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;
