import React, { useState } from 'react'
import { Button, Modal, Share, Text, ToastAndroid, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisble, setIsVisble] = useState(false);

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
      };

      const showToast = () => {
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
      };
    return (
        <View   style={styles.globalMargin}>
            <HeaderTitle title='Modal Screen'/>
            {/**Para abrir el modal */}
            <Button
                title='Abrir modal'
                onPress={()=>{
                    setIsVisble(true)
                }}
            />

            <Modal
                animationType="fade"
                visible={isVisble}
                transparent={true}
            >
                {/**Background negro */}
                <View style={{
                   flex:1,
                   // height:100,
                    // width:100,
                    /**Efecto visual que nos permite ver el fondo */
                    backgroundColor:'rgba(0,0,0,0.3)',
                    justifyContent:'center',
                    alignItems:'center',
                    }}>
                        {/**Contenido del modal */}
                        <View style={{
                            backgroundColor:'white',
                            width:200,
                            height:200,
                            justifyContent:'center',
                            alignItems:'center',
                            shadowOffset:{
                                width:0,
                                height:10
                            },
                            shadowOpacity:0.5,
                            elevation:10,
                            borderRadius:20,
                            }}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Modal</Text>
                        <Text style={{fontSize:16, fontWeight:'300', marginBottom:20}}>Cuerpo del modal</Text>
                        <Button
                            title='Cerrar modal'
                            onPress={()=>{
                                setIsVisble(false)
                            }}
                        />
                        <View style={{height:10}}></View>
                        <Button
                            title='Compartir'
                            onPress={()=>{
                                onShare()
                                setIsVisble(false)
                            }}
                        />
                         <View style={{height:10}}></View>
                        <Button
                            title='Toast'
                            onPress={()=>{
                                showToast()
                                setIsVisble(false)
                            }}
                        />
                        </View>
                </View>
            </Modal>
        </View>
    )
}
