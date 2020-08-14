import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Img = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;


export default () => {
    return(
      <Container>
        <Img source={require('../assets/images/download.png')}/>
      </Container>
    );
  }