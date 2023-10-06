import React from "react";
import styled from "styled-components/native";
import { MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";

import { Image, View, Dimensions } from "react-native";
import { ScrollView } from "react-native";


const ImageContainer = styled.View`
  flex: 1;
`;

const BackgroundImage = styled.Image`
  width: ${Dimensions.get("window").width}px;
  height: 100%;
  resizeMode: cover;
`;

const ProfileImageContainer = styled.View`
  position: absolute;
  top: 33%;
  left: 30%;
  z-index: 1;
  border: 4px solid #1878f3;
  border-radius: 100px;
  overflow: hidden;
  align-items: center;
  
`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 2px solid #FFFFFF;
`;

const SearchBarContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1878f3;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BackIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: #fff;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  background-color: #135ba5;
  color: #fff;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const SearchIcon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: #fff;
`;

const ProfileText = styled.Text`
  text-align: center;
  font-size: 18px;
  top: 6%;
  font-weight: bold;
`;

const ProfileActive = styled.View`
  top: 4%;
  left: 60%;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #10d24b;
  border: 4px solid #ffffff;
  z-index: 1;
`;


const ProfileHeader = () => {
    return (
    <>
        <ImageContainer>
        <BackgroundImage source={require("../assets/porrotx.jpg")} />
      </ImageContainer>
      <ProfileImageContainer>
        <ProfileImage source={require("../assets/porrotx.jpg")} />
      </ProfileImageContainer>
     
      <ProfileActive />
      <SearchBarContainer>
        <BackIcon name="arrow-back" />
        <SearchInput placeholder="Porrotx The Clown" placeholderTextColor="#fff" />
        <SearchIcon name="account-box-multiple" />
      </SearchBarContainer>
      <ProfileText>Porrotx The Clown</ProfileText>
    </>
    );
  };
  
  export default ProfileHeader;
  


