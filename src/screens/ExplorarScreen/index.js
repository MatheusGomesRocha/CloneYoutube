import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Texto = styled.Text``;
  


export default () => {
    return(
      <Container>
          <Texto> Olá mundo </Texto>
      </Container>
    );
  }