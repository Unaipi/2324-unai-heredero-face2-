import React from "react";
import { Text } from 'react-native';
import styled from 'styled-components/native'
import SearchBar from "../components/ProfileInfo";
import Users from "../components/Users";
import Avatar from "../components/Avatar";
import ProfileHeader from "../components/Profileheader";
import ProfileInfo from "../components/ProfileInfo";

const View = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`

const Profile = () => {
    return (
        <View>
            <ProfileHeader/>     
            <ProfileInfo/>    
        </View>
    )
}
export default Profile