import React, {Component} from 'react';
import { useTheme } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
//const theme = useTheme();

// Agafem l'amplaria de la nostra pantalla
const screenWidth = Dimensions.get('window').width;
// Agafem l'alçada de la nostra pantalla
const screenHeight = Dimensions.get('window').height;
//Calculem el tamany de cada imatge
const imgWidth = screenHeight > screenWidth ? screenWidth / 4 : screenHeight / 4;
//Declarem theme per a utilitzar temes de llibreria paper

const ArtWork = () => {
  return "https://m.media-amazon.com/images/I/61wT8fN0YoL._SL1200_.jpg"
}

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.artWork}>
          <View style={styles.square}><Text>Ací va una imatge</Text></View>
          <Image source={{uri: ArtWork()}} style={styles.square} />
        </View>
        <View style={styles.titolCantant}></View>
        <View style={styles.controls}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:6,
    backgroundColor: '#191414',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor:'purple',
    borderWidth:5,
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: "#1DB954",
    alignContent: 'flex-end',
    position:'absolute'
  },
  imatgePortada:{

  },
  artWork:{
    flex:3,
    borderColor:'blue',
    borderWidth:5,
    alignItems: 'center',
    justifyContent: 'center',
    
    //color: theme.colors.surface

  },
  titolCantant:{
    flex:1,
    borderColor:'green',
    borderWidth:5,
    
  },
  controls:{
    flex:2,
    borderColor:'red',
    borderWidth:5,
  }
})