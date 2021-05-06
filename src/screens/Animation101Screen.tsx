import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    const {fadeIn,fadeOut,opacity,position,startMovingPosition}= useAnimation();
     return (
        <View style={styles.container}>
            {/**Si se quiere utilizar una propiedad animada
             * se debe utilizar el Animated.Element
             */}
            <Animated.View style={{...styles.purpleBox, 
                opacity:opacity, 
                marginBottom:20,
                transform:[{
                    translateX:position
                }]
                }}></Animated.View>
            <Button
                title='FadeIn'
                onPress={()=>{
                    fadeIn();
                    startMovingPosition(100,700);
                }
                }
            />
            <Button
                title='FadeOut'
                onPress={()=>fadeOut()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center',
    },
    purpleBox:{
        backgroundColor:'#5856D6',
        width:150,
        height:150,
    }
});