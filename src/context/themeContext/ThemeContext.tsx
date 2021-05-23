import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

//Para saber que informacion expone el ThemeContext
interface ThemeContextProps{
    theme:ThemeState,
    setDarkTheme :()=>void,
    setLightTheme :()=>void,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:any)=>{

    /**Se va usar aqui el porque aqui siempre va estar escuchando
     * y esta a nivel glbal y no se va a destruir para obtener 
     * el tema del SO
     * **/
    const colorScheme= useColorScheme();
    
    useEffect(() => {
        //Dice com esta el estado de la aplicación
        AppState.addEventListener('change',(status)=>{
            
            if (status==='active') {
                //Appearance.getColorScheme() obtine la apariencia del SO en Android y IOS
                //Cuando se cambia el estado de la app
                (Appearance.getColorScheme()==='light')?
                setLightTheme():
                setDarkTheme();
            }
        })
    }, [])

    const [theme, dispatch] = useReducer(
        themeReducer,
        (Appearance.getColorScheme()==='dark'?darkTheme:lightTheme ));
    
    //Solo funciona en IOS por el momento
    // useEffect(() => {
    //     (colorScheme==='light')?setLightTheme():setDarkTheme();
    // }, [colorScheme])

    const setDarkTheme=()=>{
        dispatch({type:'set_dark_theme'})
        console.log('setDarkTheme');
    }
    const setLightTheme=()=>{
        dispatch({type:'set_light_theme'})
        console.log('setLightTheme');
    }

    return(
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}