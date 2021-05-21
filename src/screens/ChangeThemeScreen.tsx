import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const {setDarkTheme} = useContext(ThemeContext)

    return (
        <View>
           <HeaderTitle title='Theme'/> 

           <TouchableOpacity 
            activeOpacity={0.8}
            style={{
               backgroundColor:'#5856D6',
               width:150,
               height:50,
               borderRadius:20,
               justifyContent:'center',
               alignItems:'center'
               
           }}
           onPress={setDarkTheme}
           >
               <Text style={{
                   color:'white',
                   textAlign:'center',
                   fontSize:20
               }}>Light / Dark</Text>
           </TouchableOpacity>
        </View>
    )
}

