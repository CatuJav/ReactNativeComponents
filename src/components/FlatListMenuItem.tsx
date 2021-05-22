import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props{
   menuItem:MenuItem 
}
export const FlatLisMenutItem = ({menuItem}:Props) => {
    const navigation=useNavigation();
    //Hook para obtener los colores para tener acceso a los colores del tema global
    //const {colors}=useTheme();
  const { theme:{colors}} = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>{
                navigation.navigate(menuItem.component)
            }}
        >
            <View style={styles.container}>
            <Icon name={menuItem.icon} color={colors.primary} size={23}/>
            <Text style={{...styles.itemText}}>
                {menuItem.name}</Text>
            <View style={{flex:1}}></View>
            <Icon name='chevron-forward-outline' color={colors.primary} size={23}/>  
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10,
        fontSize:19
    },
});