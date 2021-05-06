import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {
    
    /**Para guardar el estado de la opacity sin
     * volver a renderizar
     * El Value recibre un solo valor
     * El current es propio del useRef
     */
    const opacity = useRef(new Animated.Value(0)).current
    const top = useRef(new Animated.Value(-100)).current
    /**Definimos la funcoón para la animación llamado FadeIn */
    const fadeIn=()=>{
        //Se puede animar con varios métodos
        Animated.timing(opacity,{
            toValue:1,
            duration:300,
            useNativeDriver:true
        }).start(
            //Callback que se llama cuando la aniamación termina
            ()=>{console.log('Terminó animación')} 
        );

        //Para la caida y bounce
        Animated.timing(
            top,
            {
                toValue:0,
                duration:700,
                useNativeDriver:true,
                //Para el rebote
                easing:Easing.bounce
            }).start();
    }
    /**Definimos la funcoón para la animación llamado FadeOut */
    const fadeOut=()=>{
        //Se puede animar con varios métodos
        Animated.timing(opacity,{
            toValue:0,
            duration:300,
            //Aceleración por hardware
            useNativeDriver:true
        }).start();
    }
    return (
        <View style={styles.container}>
            {/**Si se quiere utilizar una propiedad animada
             * se debe utilizar el Animated.Element
             */}
            <Animated.View style={{...styles.purpleBox, 
                opacity:opacity, 
                marginBottom:20,
                transform:[{
                    translateY:top
                }]
                }}></Animated.View>
            <Button
                title='FadeIn'
                onPress={()=>fadeIn()}
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