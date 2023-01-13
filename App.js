import React, { Component, useState } from 'react';
import { Button, IconButton, useTheme } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';


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

const TitolCantant = (num) => {
  const cantants = ["Cantant", "Beach House", "Boy Pablo", "Papooz", "Gus Dapperton"];
  const titols = ["Grup", "Space Song", "Losing You", "Ann wants to dance", "Verdigris"]
  var data = {cantant: cantants[num], titol:titols[num]};
 
  //var data = "" + cantants[num] + "-" + titols[num];
  return data
}



const App = () => {

  const theme = useTheme();

  const [iconaFav, setIconaFav] = useState('heart');
  const [colorIconaFav, setColorIconaFav] = useState('grey');
  const [iconaBluetooth, setIconaBluetooth] = useState('bluetooth');
  const [colorIconaBluetooth, setColorIconaBluetooth] = useState('grey');
  const [iconaShuffle,setIconaShuffle] = useState('shuffle-variant');
  const [colorIconaShuffle, setColorIconaShuffle] = useState('grey');

  const canviaIconaFav = () => {
    if (iconaFav === 'heart') {
      setIconaFav('cards-heart')
      setColorIconaFav('green')
    }
    else { setIconaFav('heart'); setColorIconaFav('grey') }
  }

  const canviaIconaBluetooth = () => {
    if (colorIconaBluetooth === 'grey') {
      setColorIconaBluetooth('white')
    }
    else {  setColorIconaBluetooth('grey') }
  }

  const canviaIconaShuffle = () => {
    if (colorIconaShuffle === 'grey') {
      setColorIconaShuffle('white')
    }
    else {  setColorIconaShuffle('grey') }
  }

  const {titol,cantant}=TitolCantant(1);
// És igual que la linea anterior const titol = TitolCantant(1).titol;

  return (
    <View style={styles.container}>
      <View style={styles.artWork}>
        <View style={styles.square}><Text>Ací va una imatge</Text></View>
        <Image source={{ uri: ArtWork() }} style={styles.imatgePortada} />
      </View>
      <View style={styles.titolCantant}>
        <View>
          <IconButton
            style={{width: 50,height: 50,}}
            size={40}
            animated={true}
            icon={iconaBluetooth}
            iconColor={colorIconaBluetooth}
            onPress={canviaIconaBluetooth}
          />
        </View>
        <View style={styles.dades}>
          <Text style={styles.textTitol}>{titol}</Text>
          <Text style={styles.textCantant}>{cantant}</Text>
        </View>
        <View>
          <IconButton
            style={{width: 50,height: 50,}}
            size={40}
            animated={true}
            icon={iconaShuffle}
            iconColor={colorIconaShuffle}
            onPress={canviaIconaShuffle}
          />
        </View>
      </View>
      <View style={styles.controls}></View>

    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#191414',
    flexDirection: 'column',
    borderColor: 'purple',
    borderWidth: 5,
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: "#1DB954",
    alignContent: 'flex-end',
    position: 'absolute'
  },
  imatgePortada: {
    width: 200,
    height: 200,

  },
  artWork: {
    flex: 3,
    borderColor: 'blue',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },

  icones: {
  },

  icones: {
  },
  dades: {
    flexDirection: 'column',

  },
  titolCantant: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 5,
    flexDirection: 'row',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'space-between'


  },
  textTitol: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: "bold"
  },
  textCantant: {
    color: 'grey',
    fontSize: 20,
  },
  controls: {
    flex: 2,
    borderColor: 'red',
    borderWidth: 5,
  }
})