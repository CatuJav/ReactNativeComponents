import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterface';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props{
   menuItem:MenuItem 
}
export const FlatLisMenutItem = ({menuItem}:Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
        >
            <View style={styles.container}>
            <Icon name={menuItem.icon} color='green' size={23}/>
            <Text style={styles.itemText}>
                {menuItem.name}</Text>
            <View style={{flex:1}}></View>
            <Icon name='chevron-forward-outline' color='green' size={23}/>  
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