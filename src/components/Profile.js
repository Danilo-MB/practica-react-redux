import React from 'react';
import { Name, ProfileCard, LastName, CardImage } from './ProfileElements';
import { useSelector } from 'react-redux'

const Profile = () => {

    const profile = useSelector((state) => {
        return {
            name: state.profileInfo.name,
            lastName: state.profileInfo.lastName,
            imageUrl: state.profileInfo.imageUrl
        }
    });

    return (
        <div>
            <ProfileCard>
                <CardImage src={profile.imageUrl}/>
                <Name>{profile.name}</Name>
                <LastName>{profile.lastName}</LastName>
            </ProfileCard>
        </div>
    );
}

export default Profile;