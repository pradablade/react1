import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (<div>
        <div>
            <img className={classes.image} src='https://upload.wikimedia.org/wikipedia/commons/1/13/Yung_Lean%27s_Logo.png' />
        </div>
        <div className={classes.dblock}>
            ava + desc
        </div>
    </div>)
}

export default ProfileInfo;