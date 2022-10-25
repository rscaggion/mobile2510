import React from "react";
import {View, Image, Text, Pressable} from 'react-native';

import ImgFundo from '../../assets/logo.png';
import ImgConsole from '../../assets/console-1.png'
import ImgJogo from '../../assets/jogo-1.png';
import ImgXcloud from '../../assets/xcloud-1.png';

export default function TelaConsoles (props) {
    return (
        <View>
            <Image source={imgFundo} />
            <Text>Xbox</Text>
            <Text>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer!</Text>

            <Pressable
             onPress={ () => { props.navigation.navigate("Consoles") } }
             >
                <Image source={ imgConsole } />
                <Text> Conheça os consoles!</Text>
             </Pressable>

             <Pressable
             onPress={ () => { props.navigation.navigate("Jogos") } }
             style={estilos.card}
             >
                <Image source= { imgJogo } style={estilos.cardImg} />
                <Text style= {estilos.cardTexto}>Conheça os jogos!</Text>
            </Pressable>

            <Pressable
            onPress={ () => { props.navigation.navigate("Nuvem") } }
            style={estilos.card}
            >
               <Image source= { ImgXcloud } style={estilos.cardImg} />
               <Text style= {estilos.cardTexto}>Conheça o XCloud!</Text>
           </Pressable>


        </View>
    )
}