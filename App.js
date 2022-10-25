import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigatorContainer} from 'react-native';
import TelaConsoles from './componentes/TelaConsoles/estilos';
import TelaInicial from './componentes/TelaInicial/estilos';
import TelaJogos from './componentes/TelaJogos/estilos';
import TelaNuvem from './componentes/TelaNuvem/estilos';

export default function App() {
  return (


    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
