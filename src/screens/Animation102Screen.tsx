import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onPanResponderMove:Animated.event([
            null,
            {
            dx:pan.x,
            dy:pan.y,
            }
        ],
        {
            //Poner en falso para que funcione
            useNativeDriver:false
        }),
        //Cuando suelta la animación
        onPanResponderRelease:()=>{
            Animated.spring(
                pan,
                {
                    toValue:{x:0,y:0},
                    //Poner en falso para que funcione
                    useNativeDriver:false
                }
            ).start();
        }
    })

    return (
        <View style={{...styles.container,flex:1}}>
            <Animated.View 
            //Establecemos todas las propiedades del panResnse
            {...panResponder.panHandlers} style={[pan.getLayout(), styles.purpleBox]}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    purpleBox:{
        backgroundColor:'#75CEDB',
        width:150,
        height:150,
        borderRadius:20,
    }
});