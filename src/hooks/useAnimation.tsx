import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation = () => {
    
       /**Para guardar el estado de la opacity sin
     * volver a renderizar
     * El Value recibre un solo valor
     * El current es propio del useRef
     */
        const opacity = useRef(new Animated.Value(0)).current
        const position = useRef(new Animated.Value(0)).current
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
    
        const startMovingPosition=(initPostion:number,duration:number=300)=>{
            position.setValue(initPostion);
            //Para la caida y bounce
             Animated.timing(
                position,
                {
                    toValue:0,
                    duration,
                    useNativeDriver:true,
                    //Para el rebote
                    //easing:Easing.bounce
                }).start();
        }
    return {
        opacity,
        startMovingPosition,
        position,
        fadeIn,
        fadeOut
    }
}
