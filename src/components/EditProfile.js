import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InfoInput, LabelInput, Wrapper, FormButton, SecondaryWrapper, Body, ProfileImage } from './EditProfileElements';
import { setProfile, saveUser } from '../redux/actions';
import { createHashHistory } from "history";

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
        dispatch(saveUser(profileInfo));
    };

    return (
        <Body>
        <Wrapper>
            <h6>Edit Profile</h6>
            <SecondaryWrapper>
                <LabelInput>Name</LabelInput>
            </SecondaryWrapper>
            <div>
                <InfoInput onChange={e => setUserName(e.target.value)} type="text" value={userName} name="userName" placeholder="Insert name"/>
            </div>
            <SecondaryWrapper>
                <LabelInput>Last Name</LabelInput>
            </SecondaryWrapper>
            <div>
                <InfoInput onChange={e => setLastName(e.target.value)} type="text" value={lastName} name="lastName" placeholder="Insert lastname"/>
            </div>
            <SecondaryWrapper>
                <LabelInput>Image Url</LabelInput>
            </SecondaryWrapper>
            <div>
                <InfoInput onChange={e => setImageUrl(e.target.value)} type="text" value={imageUrl} name="imageUrl" placeholder="Insert imageUrl"/>
            </div>
            <div>
                <FormButton to="/" onClick={handleSubmit}>Submit</FormButton>
            </div>
        </Wrapper>
        
        <Wrapper>
        <SecondaryWrapper>
            <h6>Profile Preview</h6>
        </SecondaryWrapper>
        <SecondaryWrapper>
            <LabelInput>{userName}</LabelInput>
        </SecondaryWrapper>
        <SecondaryWrapper>
            <LabelInput>{lastName}</LabelInput>
        </SecondaryWrapper>
        <SecondaryWrapper>
            <ProfileImage src={imageUrl}/>
        </SecondaryWrapper>
    </Wrapper>
    </Body>
    );
}

export default EditProfile;