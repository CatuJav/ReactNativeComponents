import React from 'react'

import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { FlatLisMenutItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';



export const HomeScreen = () => {


    
    return (
        <View style={{
            flex:1,
            ...styles.globalMargin
        }}>

           <FlatList
            data={menuItems}
            renderItem={({item})=><FlatLisMenutItem menuItem={item}/>}
            keyExtractor={(item)=>item.name}
            ListHeaderComponent={()=><HeaderTitle title='Opciones de menú'/>}
            ItemSeparatorComponent={()=><ItemSeparator/>}
           />
        </View>
    )
}
