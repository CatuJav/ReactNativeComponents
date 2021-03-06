import React, { useContext, useState } from 'react'
import { FlatList, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
    const {theme:{colors,dividerColor}} = useContext(ThemeContext)

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore=()=>{
        const newArray:number[]=[];
        for (let i = 0; i < 5; i++) {
            newArray[i]=numbers.length+i;
            
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    }

    const renderItem=(item:number)=>{
        return(
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/1024/1024`}
                //Pasamos las argumentos del fadeImage
                style={{
                    width:'100%',
                    height:400,
                    borderRadius:20
                }}
            />

        )}
        //     <Image
        //         source={{
        //             uri:`https://picsum.photos/id/${item}/500/400`,
        //         }}
        //         style={{
        //             width:'100%',
        //             height:400,
        //         }}
        //     />
        // )}


    return (
        <View style={{flex:1}}>
          <FlatList
          //Para poner un header que suba con la lista
            ListHeaderComponent={()=>(
                <View style={{marginHorizontal:20}}>
                    <HeaderTitle title='Infinite Scroll'/> 
                </View>
            ) }
            data={numbers}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=>renderItem(item)}
            //Cuando llegue al final
            onEndReached={()=>{loadMore()}}
            //Indica ya cuanto falta para llegar al fondo
            onEndReachedThreshold={0.5}
            //Para indicar que se esta haciendo algo
            ListFooterComponent={()=>(
                <View style={{
                    height:150,
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%'
                }}>
                   <ActivityIndicator size={25} color={colors.primary}/>
                </View>
            )}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem:{
        backgroundColor:'green',
        height:150,
    }
});
