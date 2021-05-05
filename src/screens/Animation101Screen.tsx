import React, { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {
    
    /**Para guardar el estado de la opacity sin
     * volver a renderizar
     * El Value recibre un solo valor
     * El current es propio del useRef
     */
    const opacity = useRef(new Animated.Value(0.4)).current
    
    return (
        <View style={styles.container}>
            {/**Si se quiere utilizar una propiedad animada
             * se debe utilizar el Animated.Element
             */}
            <Animated.View style={{...styles.purpleBox, opacity:opacity}}></Animated.View>
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