import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InfoInput, LabelInput, FormLink, FormButton } from './EditProfileElements';
import { setProfile } from '../redux/actions';

const EditProfile = () => {

    const profile = useSelector((state) => {
        return {
            name: state.profileInfo.name,
            lastName: state.profileInfo.lastName,
            imageUrl: state.profileInfo.imageUrl
        }
    });

    const [userName, setUserName] = useState(profile.name);
    const [lastName, setLastName] = useState(profile.lastName);
    const [imageUrl, setImageUrl] = useState(profile.imageUrl);
 
    const dispatch = useDispatch();
    
    const profileInfo = {name: userName, lastName, imageUrl};

    const handleSubmit = () => {
        dispatch(setProfile(profileInfo));
    };

    return (
        <>
        <div>
            <form>
            <div>
                <LabelInput>Name</LabelInput>
                    <InfoInput onChange={e => setUserName(e.target.value)} type="text" value={userName} name="userName" placeholder="Insert name"/>
            </div>
            <div>
            <LabelInput>Last Name</LabelInput>
                <InfoInput onChange={e => setLastName(e.target.value)} type="text" value={lastName} name="lastName" placeholder="Insert lastname"/>
            </div>
            <div>
            <LabelInput>Image Url</LabelInput>
                <InfoInput onChange={e => setImageUrl(e.target.value)} type="text" value={imageUrl} name="imageUrl" placeholder="Insert imageUrl"/>
            </div>
            <div>
                <FormButton onClick={handleSubmit} type="submit">Submit</FormButton>
            </div>
            <div>
                <FormLink to="/">Go to Profile</FormLink>
            </div>
            </form>
            <h5>Los datos del perfil son {userName} {lastName} {imageUrl}</h5>
        </div>
        </>
    );
}

export default EditProfile;