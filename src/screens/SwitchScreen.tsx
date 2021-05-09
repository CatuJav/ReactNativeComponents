import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive:true,
        isHungry:false,
        isHappy:true,
    })

    //Fucion que devuelve void 
    const onChange=(value:boolean, field:string)=>{
        setState({
            ...state,
            //Computo el campo que quiero actualizar
            [field]:value
        })
    }

    const {isActive,isHungry,isHappy}=state;

    return (
        <View style={{marginHorizontal:20}}>
            <HeaderTitle title='Switches'/>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isActived</Text>
                <CustomSwitch isOn={isActive} onChange={(value)=>{onChange(value,'isActive')}}/>
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value)=>{onChange(value,'isHungry')}}/>
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value)=>{onChange(value,'isHappy')}}/>
            </View>
            <Text style={styles.switchText}>{JSON.stringify(state,null,3)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({  
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
