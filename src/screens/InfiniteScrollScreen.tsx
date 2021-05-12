import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore=()=>{
        const newArray:number[]=[];
        for (let i = 0; i < 5; i++) {
            newArray[i]=numbers.length+i;
            
        }

        setNumbers([...numbers, ...newArray]);
    }

    const renderItem=(item:number)=>{
        return <Text style={styles.textItem}>
            {item}
        </Text>
    }


    return (
        <View style={{flex:1,backgroundColor:'red'}}>
          <FlatList
          //Para poner un header que suba con la lista
            ListHeaderComponent={<HeaderTitle title='Infinite Scroll'/>  }
            data={numbers}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=>renderItem(item)}
            //Cuando llegue al final
            onEndReached={()=>{loadMore()}}
            //Indica ya cuanto falta para llegar al fondo
            onEndReachedThreshold={0.5}
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
