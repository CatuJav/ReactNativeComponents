import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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
    },
    {
        name:'Animation 02',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 03',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 04',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 05',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 06',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 07',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 08',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
    {
        name:'Animation 09',
        icon:'cube-outline',
        component:'Animation101Screen'
    },
]
export const HomeScreen = () => {

    const {top}=useSafeAreaInsets();
    
    const renderMenuItem=(menuItem:MenuItem)=>{

        return (
            <View>
                <Text>{menuItem.name} -{menuItem.icon}</Text>
            </View>
        )
    }

    const renderListHeader=()=>{
        return (
            <View style={{marginTop:top+20, marginBottom:20}}>
            <Text style={styles.title}>Opciones de Menu</Text>        
            </View>
        )
    }

    const itemSeparator=()=>{
        return (
            <View style={{borderBottomWidth:1, opacity:0.4, marginVertical:8}}>

            </View>
        )
    }
    return (
        <View style={{
            flex:1,
            ...styles.globalMargin
        }}>

           <FlatList
            data={menuItems}
            renderItem={({item})=>renderMenuItem(item)}
            keyExtractor={(item)=>item.name}
            ListHeaderComponent={()=>renderListHeader()}
            ItemSeparatorComponent={()=>itemSeparator()}
           />
        </View>
    )
}