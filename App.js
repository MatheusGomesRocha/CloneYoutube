import React from 'react';
import Preload from './src/screens/PreloadScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './src/navigators/AppTab';
import { StatusBar } from 'react-native';

export default () => {
  return(
    <NavigationContainer>
      <AppTab/>
      <StatusBar barStyle="light-content" backgroundColor="#dedede"/>    
      </NavigationContainer>
  );
}