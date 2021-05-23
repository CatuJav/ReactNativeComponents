import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    },
    
];

export const CustomSectionListScreen = () => {

    const {theme:{colors,dividerColor}} = useContext(ThemeContext)


    return (
        <View style={{...styles.globalMargin, flex:1}}>
            <SectionList
                sections={casas}
                renderItem={ ({item})=><Text style={{color:colors.text}}>{item}</Text>}
                keyExtractor={(item,index)=>item+index}
                //Indica el header de la lista y desaparece
                ListHeaderComponent={()=><HeaderTitle title='Section List'/>}
                //Footer component
                ListFooterComponent={()=>(
                    <View style={{marginBottom:70}}>
                        <HeaderTitle 
                                        title={
                                            'Total de casas '+ casas.length//+ casas.map((index,e)=>casas[e].data.length)
                                        }/>
                    </View>
                )}
                //Pone un estilo en el que se muestra el header de la lista
                stickySectionHeadersEnabled={true}
                //Pone header a la lista
                renderSectionHeader={({section})=>(
                    <View style={{backgroundColor:colors.background}}>
                        <HeaderTitle title={section.casa}/>
                    </View>
                )}
                //Para el footer por secciones
                renderSectionFooter={({section})=>(
                    <HeaderTitle title={'Total '+section.data.length}/>
                )}
                //Separadores uno para los itms o secciones
                // ItemSeparatorComponent={()=><ItemSeparator/>}
                SectionSeparatorComponent={()=><ItemSeparator/>}

                //No mostrar el Scroll
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}
