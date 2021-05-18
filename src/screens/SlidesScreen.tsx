import React, { useState } from 'react'
import { ImageSourcePropType, SafeAreaView, View, Text, Dimensions, Image, StyleSheet } from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';


const {height:screenHeight,width:screenWidth}=Dimensions.get('window')
interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const renderItem=(items:Slide)=>{
        return (<View style={{
                        flex:1,
                        backgroundColor:'white',
                        borderRadius:5,
                        padding:40,
                        justifyContent:'center'
        }}>
            <Image
                source={items.img}
                style={{
                    width:350,
                    height:400,
                    resizeMode:'center'
                }}
            />
            <Text style={styles.title}>{items.title}</Text>
            <Text style={styles.subtitle}>{items.desc}</Text>
        </View>)
    }


    return (
        <SafeAreaView
            style={{flex:1, paddingTop:50}}
        >
          
            <Carousel
              /**PARA MANTENER LA REFERENCIA */
              //ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({item}:any)=> renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              //Para obtener el index del elemento
              onSnapToItem={(index)=>{
                setActiveIndex(index);
              }}
            />
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                //dotColor='red'
                dotStyle={{
                    width:10,
                    height:10,
                    borderRadius:10,
                    backgroundColor:'#5856D6'
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#5858d6'
    },
    subtitle:{
        fontSize:16
    }
});