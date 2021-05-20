import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

//Se crea un Theme para agregar al theme
const customTheme: Theme={
  dark:true,
  colors:{
    ...DefaultTheme.colors,
    //primary: 'rgb(255, 45, 85)',
    //background: 'black',
    //card: 'rgb(255, 255, 255)',
    //text: 'rgb(28, 28, 30)',
    //border: 'rgb(199, 199, 204)',
    //notification: 'rgb(255, 69, 58)',
  }
}

export const App = () => {
  return (
    <NavigationContainer
    //Solo se aplica en la parte de la navegación
      theme={customTheme}
    >
      <Navigator/>
    </NavigationContainer>
  )
}
