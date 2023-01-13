import React, { Component, useState } from 'react';
import { Button, IconButton, useTheme } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {
  AppRegistry,
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
  var data = { cantant: cantants[num], titol: titols[num] };

  //var data = "" + cantants[num] + "-" + titols[num];
  return data
}

const Control = () => {

}



const App = () => {



  const theme = useTheme();

  //Botons TitolCantant
  const [iconaFav, setIconaFav] = useState('heart');
  const [colorIconaFav, setColorIconaFav] = useState('grey');
  const [iconaStar, setIconaStar] = useState('star-outline');
  const [colorIconaStar, setColorIconaStar] = useState('grey');

  const canviaIconaBluetooth = () => {
    if (colorIconaBluetooth === 'grey') {
      setColorIconaBluetooth('white')
    }
    else { setColorIconaBluetooth('grey') }
  }

  const canviaIconaShuffle = () => {
    if (colorIconaShuffle === 'grey') {
      setColorIconaShuffle('white')
    }
    else { setColorIconaShuffle('grey') }
  }

  //botons Controls
  const [iconaBluetooth] = useState('bluetooth');
  const [colorIconaBluetooth, setColorIconaBluetooth] = useState('grey');
  const [iconaShuffle] = useState('shuffle-variant');
  const [colorIconaShuffle, setColorIconaShuffle] = useState('grey');
  const [iconaPlayPause, setIconaPlayPause] = useState('play');
  const [range, setRange] = useState('0%');
  const [valorSlider, setValorSlider] = useState(0);
  const duracioPista = 1000;


  const canviaIconaFav = () => {
    if (iconaFav === 'heart') {
      setIconaFav('cards-heart')
      setColorIconaFav('green')
    }
    else { setIconaFav('heart'); setColorIconaFav('grey') }
  }

  const canviaPosicioSlider = (valor) => {
    setValorSlider(valor);
    setRange(valor);
  }


  const canviaIconaStar = () => {
    if (iconaStar === 'star-outline') {
      setIconaStar('star')
      setColorIconaStar('green')
    }
    else { setIconaStar('star-outline'); setColorIconaStar('grey') }
  }
  const canviaIconaPlayPause = () => {
    if (iconaPlayPause === 'play') {
      setIconaPlayPause('pause-circle-outline')
    }
    else { setIconaPlayPause('play') }
  }

  const conversorTemps = (duracio) => {
    const hores = Math.trunc(duracio / 3600);
    const minuts = Math.trunc(duracio % 3600 / 60);
    const segons = Math.trunc(duracio % 3600 % 60);
    var horesS = "";
    var minutsS = "";
    var segonsS = "";
    if (hores >= 10) {
      horesS = hores.toString() + ":";
    } else horesS = "0" + hores.toString() + ":";

    if (hores == 0) {
      horesS = "";
    }

    if (minuts >= 10) {
      minutsS = minuts.toString() + ":";
    } else minutsS = "0" + minuts.toString() + ":";

    if (segons >= 10) {
      segonsS = segons.toString();
    } else segonsS = "0" + segons.toString();


    var time = { hh: horesS, mm: minutsS, ss: segonsS }
    return time
  }






  const { titol, cantant } = TitolCantant(1);
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
            style={{ width: 50, height: 50, }}
            size={35}
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
            style={{ width: 50, height: 50, }}
            size={35}
            animated={true}
            icon={iconaShuffle}
            iconColor={colorIconaShuffle}
            onPress={canviaIconaShuffle}
          />
        </View>
      </View>
      <View style={styles.controls}>
        <View style={styles.slider}>
          <Slider
            style={{ width: screenWidth * 0.90, height: 40 }}
            minimumValue={0}
            maximumValue={duracioPista}
            minimumTrackTintColor="green"
            maximumTrackTintColor="grey"
            value={valorSlider}
            onValueChange={valorSlider => setRange(valorSlider)}
            onSlidingComplete={valorSlider => setValorSlider(valorSlider)}
          />
        </View>
        <View style={styles.duracio}>
          <Text style={styles.textDuracio}>{"" + conversorTemps(range).hh + conversorTemps(range).mm + conversorTemps(range).ss}</Text>
          <Text style={styles.textDuracio}>{"" + conversorTemps(duracioPista).hh + conversorTemps(duracioPista).mm + conversorTemps(duracioPista).ss}</Text>
        </View>
        <View style={styles.controlButtons}>
          <IconButton
            style={{ width: 90, height: 90, }}
            size={30}
            animated={true}
            icon={iconaFav}
            iconColor={colorIconaFav}
            onPress={canviaIconaFav}
          />
          <IconButton
            style={{ width: 90, height: 90, }}
            size={50}
            animated={false}
            icon={'skip-previous'}
            iconColor={'grey'}
            onPress={valorSlider => canviaPosicioSlider(0)}
          />
          <IconButton
            style={{ width: 90, height: 90, }}
            size={70}
            animated={false}
            icon={iconaPlayPause}
            iconColor={'grey'}
            onPress={canviaIconaPlayPause}
          />
          <IconButton
            style={{ width: 90, height: 90, }}
            size={50}
            animated={false}
            icon={'skip-next'}
            iconColor={'grey'}
            onPress={valorSlider => canviaPosicioSlider(duracioPista)}
          />
          <IconButton
            style={{ width: 90, height: 90, }}
            size={30}
            animated={true}
            icon={iconaStar}
            iconColor={colorIconaStar}
            onPress={canviaIconaStar}
          />
        </View>

      </View>




    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#191414',
    flexDirection: 'column',
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
    alignItems: 'center',
    justifyContent: 'center'
  },

  dades: {
    flexDirection: 'column'
  },

  titolCantant: {
    flex: 1,
    flexDirection: 'row',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textTitol: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: "bold",
  },
  textCantant: {
    color: 'grey',
    fontSize: 20,
  },
  controls: {
    flex: 2,
    flexDirection: 'column',
  },

  slider: {

    alignItems: 'center',

  },

  duracio: {

    justifyContent: 'space-between',
    flexDirection: 'row',

  },

  textDuracio: {
    alignContent: 'flex-start',
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 15
  },

  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'green',
    marginTop: 30
  }

})