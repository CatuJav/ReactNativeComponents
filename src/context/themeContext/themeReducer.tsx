import { Theme } from "@react-navigation/native"

//La accion que tipo es.
type ThemeAction=
    | {type:'set_light_theme'}
    | {type:'set_dark_theme'}

//Como luce el state
export interface ThemeState extends Theme{
    currentTheme:'light'|'dark';
    dividerColor:string;
}


export const lightTheme: ThemeState={
    currentTheme:'light',
    dark:false,
    dividerColor:'rgba(0,0,0,0.7)',
    colors:{
        primary: '#084f6a',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'teal',
    },
}
export const darkTheme: ThemeState={
    currentTheme:'dark',
    dark:true,
    dividerColor:'rgba(0,0,0,0.7)',
    colors:{
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'teal',
    },
}

export const themeReducer =(state:ThemeState,action:ThemeAction):ThemeState=>{
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme}
        case 'set_dark_theme':
            return {...darkTheme}
        default:
            return state
    }
}