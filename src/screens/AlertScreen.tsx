import React from 'react'
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

import prompt from 'react-native-prompt-android';

import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert=()=>{
       Alert.alert(
           'Título',
           'Este es el mensaje de la alerta',
           [
               {
                   text:'Cancel',
                   onPress:()=>{console.log('cancelar')},
                   style:'cancel'
               },
               {
                   text:'OK',
                   onPress:()=>{console.log('Ok')}
               },
           ],
           {
               /**Son opciones que permiten
                * cerrar la alerta cuando doy
                * clic fuera del alert
                */
               cancelable:true,
               //Accion cuando el clic es afiera
               onDismiss:()=>{console.log('On dismiss')}
           }
       ) ;
    }

    const showPrompt=()=>{
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts'/>

            <Button
                title='Mostrar alerta'
                onPress={()=>{showAlert()}}
            />
            <View style={{height:10}}></View>
            <Button
                title='Mostrar Prompt'
                onPress={()=>{showPrompt()}}
            />
        </View>
    )
}
