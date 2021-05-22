import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme,theme:{colors}} = useContext(ThemeContext)

    return (
        <View>
           <HeaderTitle title='Theme'/> 
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
           <TouchableOpacity 
            activeOpacity={0.8}
            style={{
               backgroundColor:colors.primary,
               width:150,
               height:50,
               borderRadius:20,
               justifyContent:'center',
               alignItems:'center'
               
           }}
           onPress={setLightTheme}
           >
               <Text style={{
                   color:'white',
                   textAlign:'center',
                   fontSize:20
               }}>Light</Text>
           </TouchableOpacity>

           <TouchableOpacity 
            activeOpacity={0.8}
            style={{
               backgroundColor:colors.primary,
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
               }}>Dark</Text>
           </TouchableOpacity>
           </View>
        </View>
    )
}

