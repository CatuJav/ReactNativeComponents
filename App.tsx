import 'react-native-gesture-handler';
import React from 'react'
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

//Se crea un Theme para agregar al theme
// const customTheme: Theme={
//   dark:true,
//   colors:{
//     ...DefaultTheme.colors,
//     //primary: 'rgb(255, 45, 85)',
//     //background: 'black',
//     //card: 'rgb(255, 255, 255)',
//     //text: 'rgb(28, 28, 30)',
//     //border: 'rgb(199, 199, 204)',
//     //notification: 'rgb(255, 69, 58)',
//   }
// }

export const App = () => {
  return (

    /**AppState tiene que ser el padre del NavigationContainer */
    <AppState>
     
        <Navigator/>

    </AppState>
  )
}

const AppState =({children}:any)=>{
  return (
    //ThemeProvider de nuestro contexto
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}