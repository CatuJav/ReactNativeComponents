import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const {theme:{colors,dividerColor}} = useContext(ThemeContext)


    const {top}=useSafeAreaInsets();

    const [refresing, setRefresing] = useState(false);
    const [data, setData] = useState<string>()

    const onRefresh=()=>{
        //Asignamos el refresh en true
        setRefresing(true);
        //Funcion para que luego de 1.5s se cambie el refresh a false
        setTimeout(() => {
            setRefresing(false);
            setData('Hola mundo')
        }, 3000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    onRefresh={()=>{onRefresh()}}
                    //Para indicar que tan alejado del top se muestra
                    progressViewOffset={10}
                    progressBackgroundColor={colors.text}
                    colors={['blue','green','orange']}
                    
                />
            }
        >
        <View style={{...styles.globalMargin, marginTop:refresing?top:0}}>
            <HeaderTitle title='Pull to refresh'/>
            {
                data&&  <HeaderTitle title={data}/>
            }
        </View>
        </ScrollView>
    )
}
