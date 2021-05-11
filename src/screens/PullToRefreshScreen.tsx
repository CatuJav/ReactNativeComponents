import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const [refresing, setRefresing] = useState(false);

    const onRefresh=()=>{
        //Asignamos el refresh en true
        setRefresing(true);
        //Funcion para que luego de 1.5s se cambie el refresh a false
        setTimeout(() => {
            setRefresing(false);
        }, 1500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    onRefresh={()=>{onRefresh()}}
                />
            }
        >
        <View style={styles.globalMargin}>
            <HeaderTitle title='Pull to refresh'/>
        </View>
        </ScrollView>
    )
}
