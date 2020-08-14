import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = styled.View`
    height: 60px;
    borderBottomWidth: 1px;
    borderBottomColor: #ccc;
    flex-direction: row;
    align-items: center;
`;

const Logo = styled.Image`
    width: 100px;
    height: 45px;
`;

const UserPic = styled.Image`
    width: 27px;
    height: 27px;
    border-radius: 100px;
    margin:0 10px 0 25px;
`;

const ViewLeft = styled.View`
    width: 30%;
    margin-left: 20px;
`;

const ViewRight = styled.View`
    width: 70%;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 30px;

`;

export default () => {
    return(
        <Header>
            <ViewLeft>
                <Logo source={require('../assets/images/logo.jpg')} />
            </ViewLeft>
            <ViewRight>
                <Icon name="tv" size={25} style={{marginLeft: 25}}/>
                <Icon name="search" size={25} style={{marginLeft: 25}}/>
                <UserPic source={require('../assets/images/eu.jpeg')} />
            </ViewRight>
            
        </Header>
    );
}