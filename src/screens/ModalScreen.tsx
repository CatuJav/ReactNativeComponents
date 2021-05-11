import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisble, setIsVisble] = useState(false);

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
                    backgroundColor:'rgba(0,0,0,0.3)'}}>
                        {/**Contenido del modal */}
                        <View style={{backgroundColor:'white'}}>
                        <HeaderTitle title='Modal'/>
                        <Text>Cuerpo del modal</Text>
                        <Button
                            title='Cerrar modal'
                            onPress={()=>{
                                setIsVisble(false)
                            }}
                        />
                        </View>
                </View>
            </Modal>
        </View>
    )
}
