import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


interface MenuItem{
    name:string;
    icon:string;
    component:string;
}

const menuItems:MenuItem[]=[
    {
        name:'Animation 01',
        icon:'cube-outline',
        component:'Animation101Screen'
    }
]
export const HomeScreen = () => {

    const renderMenuItem=(menuItem:MenuItem)=>{
        return (
            <View>
                <Text>{menuItem.name} -{menuItem.icon}</Text>
            </View>
        )
    }
    return (
        <View style={{
            flex:1
        }}>
           <FlatList
            data={menuItems}
            renderItem={({item})=>renderMenuItem(item)}
            keyExtractor={(item)=>item.name}
           />
        </View>
    )
}
