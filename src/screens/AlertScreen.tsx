import React from 'react'
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
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
               onDismiss:()=>{console.log('On dismiss')}
           }
       ) ;
    }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts'/>

            <Button
                title='Mostrar alerta'
                onPress={()=>{showAlert()}}
            />
        </View>
    )
}
