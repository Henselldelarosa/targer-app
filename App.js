import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './variables/color';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)

  const handleNumberPick = (pickNumber) => {
    setUserNumber(pickNumber)
  }

  const screen = userNumber ? <GameScreen/> : <StartGameScreen onPick={handleNumberPick}/>

  return (
    <LinearGradient colors={[Colors.primaryDark, Colors.secondaryLight]} style={styles.rootScreen}>
      <ImageBackground
      source={require('./assets/images/dices.png')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroudImage}
      >
         <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        {/* <StartGameScreen/> */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroudImage:{
    opacity:.15
  }
});

///Users/henselldelarosa/Programming/udemy/react-native/target-app/assets/images/dices.avif
