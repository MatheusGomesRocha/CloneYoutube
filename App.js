import React from 'react';
import Preload from './src/screens/PreloadScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './src/navigators/AppTab';

export default () => {
  return(
    <NavigationContainer>
      <AppTab/>
    </NavigationContainer>
  );
}