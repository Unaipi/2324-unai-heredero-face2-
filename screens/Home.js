import React from "react";
import { Text } from 'react-native';
import styled from 'styled-components/native'
import ToolBar from "../components/ToolBar";
import MainSeparator from '../components/MainSeparator'
import Users from "../components/Users";
import Story from "../components/Story";
import Post from "../components/Post";
import { ScrollView } from "react-native"



const View = styled.View`
    flex: 1;
`

const Home = () => {
    return (
        <ScrollView>
            <View>
                <ToolBar/>
                <MainSeparator style={{margin: 12}}/>
                <Users/>
                <MainSeparator/>
                <Story/>
                <MainSeparator/>
                <Post/>
                <MainSeparator/>
            </View>
            </ScrollView>
    )
}
export default Home