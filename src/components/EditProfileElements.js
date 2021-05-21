import styled from 'styled-components';

export const Body = styled.div`
    padding: 3px;

`

export const Wrapper = styled.div`
    margin-top: 20px;
    border: 1px solid yellow;
    width: 50%;
`

export const SecondaryWrapper = styled.div`
    margin-bottom: 5px;
    margin-top: 10px;

`

export const InfoInput = styled.input`
    border: 1px solid yellow;
    font-size: 4px solid gray;
    witdh: 50%;
    padding: 7px;
    color: gray;
    :: placeholder {
        color: yellow;
        font-style: italic;
        font-size: 7px;
        align-items: center;
    }
`

export const LabelInput = styled.label`
    font-size: 12px;
    color: yellow;
`
export const FormButton = styled.button`
    border: 2px solid yellow;
    margin-top: 20px;
    margin-bottom: 5px;
    color: blue;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    color: black;
    background: yellow;
`
export const ProfileImage = styled.img`
    border: 1px solid yellow;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin: 10px;
`