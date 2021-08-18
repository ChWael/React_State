import React from "react";

const Profile = (props) => {
    const {fullName, bio, profession, img} = props;
    return(
        <div className = 'Profile'>
            <img className='img' src={img} alt='cat' />
            <h1>{fullName}</h1>
            <h1>{profession}</h1>
            <p>{bio}</p>
        </div>
    )
}

export default Profile;