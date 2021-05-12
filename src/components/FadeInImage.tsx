import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation'


interface Props{
    uri:string;
    style?:StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri,style={}}:Props) => {
    const {fadeIn,opacity}=useAnimation();
    //Para mantender el estados de cuando estoy cargando una imangen o no
    const [isLoading, setisLoading] = useState(true)

    //
    const finishLoading=()=>{
        setisLoading(false);
        fadeIn();
    }
    return (
       <View style={{
           alignItems:'center',
           justifyContent:'center'
       }}>
           
           {
               /**El activity indicator respeta el tamaño de la imagen 
                * además sirve para mostrar cuando no se carga la imagen
               */
               isLoading&&
               <ActivityIndicator style={{position:'absolute'}} color='#5856D6' size={30}/>
           }
        {/* //Usar Animated de react-native */}
        <Animated.Image
            source={{
                uri:uri
            }}
            //Para llamar el metodo de fadeIn
            onLoadEnd={()=>{
                finishLoading()
            }}

            style={{
                //Para decir que confie que recibe un objeto
                ...style as any, 
                opacity
            }}
            // style={{
            //     width:'100%',
            //     height:400,
            //     opacity
            // }}
        />
       </View>
    )
}
