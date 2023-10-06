import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, View, Dimensions } from "react-native";

const ImageContainer = styled.View`
  flex: 1;
`;

const SmallImage = styled.Image`
  position: absolute;
  top: 80%;
  left: 10%;
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

const ProfileInfo = () => {
  return (
    <ImageContainer>
      <SmallImage source={require("../assets/porrotx.jpg")} />
    </ImageContainer>
  );
};

export default ProfileInfo;
