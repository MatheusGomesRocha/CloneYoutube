import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = styled.View`
    height: 60px;
    borderBottomWidth: 1px;
    borderBottomColor: #ccc;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Logo = styled.Image`
    width: 100px;
    height: 45px;
`;

const UserPic = styled.Image`
    width: 27px;
    height: 27px;
    border-radius: 100px;
`;

export default () => {
    return(
        <Header>
            <Logo source={require('../assets/images/logo.jpg')} />
            <Icon name="tv" size={25} />
            <Icon name="forward" size={25} />
            <Icon name="search" size={25} />
            <UserPic source={require('../assets/images/eu.jpeg')} />
        </Header>
    );
}