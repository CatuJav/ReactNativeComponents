import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
    
    const {form,onChange, isSuscribed}=useForm({
        name:'',
        email:'',
        phone:'',
        isSuscribed:false
    })
    
    const {theme:{colors,dividerColor}} = useContext(ThemeContext)


    return (
        //Para que cuando clic afuera el teclado se cierre
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView>
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            <View style={styles.globalMargin}>
                <HeaderTitle title='TextInputs'/>

                <TextInput
                    style={{...stylesScreen.inputStyle,
                        borderColor:colors.text,   
                        color:colors.text       
                    }}
                    placeholder='Ingrese su nombre'
                    placeholderTextColor={dividerColor}
                    /**Para desactivar el autocorrector */
                    autoCorrect={false}
                    autoCapitalize='words'
                    //onChange cuando cambia el texto y no el
                    //otro onChange porque esos son para las propiedades
                    onChangeText={(value)=>onChange(value,'name')}
                />
                <TextInput
                     style={{...stylesScreen.inputStyle,
                        borderColor:colors.text,   
                        color:colors.text       
                    }}
                    placeholder='Ingrese su email'
                    placeholderTextColor={dividerColor}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(value)=>onChange(value,'email')}
                    //Tipo de teclado
                    keyboardType='email-address'
                />

            <View style={stylesScreen.switchRow}>
                <Text style={stylesScreen.switchText}>Suscribirse</Text>
                <CustomSwitch isOn={isSuscribed} onChange={(value)=>{onChange(value,'isSuscribed')}}/>
            </View>

                <HeaderTitle title={JSON.stringify(form,null,3)}/>
                <HeaderTitle title={JSON.stringify(form,null,3)}/>
                
                <TextInput
                    style={{...stylesScreen.inputStyle,
                        borderColor:colors.text,   
                        color:colors.text       
                    }}
                    placeholder='Ingrese su teléfono'
                    placeholderTextColor={dividerColor}
                    onChangeText={(value)=>onChange(value,'phone')}
                    keyboardType='phone-pad'
                />
                
            <View style={{height:100}}></View>
            </View>
            </TouchableWithoutFeedback>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth:1,
        height:50,
        paddingHorizontal:10,
        borderRadius:10,
       
        marginVertical:10,
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
    },
    switchText:{
        fontSize:25
    },
});