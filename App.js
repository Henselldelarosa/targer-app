import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './variables/color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const handleNumberPick = (pickNumber) => {
    setUserNumber(pickNumber)
    setGameOver(false)
  }


  const handleGameOver =() => {
    setGameOver(true)
  }

  let screen = <StartGameScreen onPick={handleNumberPick} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver = {handleGameOver}/>
    );
  }

  if(gameOver){
    screen = <GameOverScreen/>
  }



  return (
    <>
      <StatusBar
    style='light'
    />
      <LinearGradient
      colors={[Colors.primaryDark, Colors.secondaryLight]}
      style={styles.rootScreen}
      >

        <ImageBackground
        source={require('./assets/images/dices.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:.15
  }
});

///Users/henselldelarosa/Programming/udemy/react-native/target-app/assets/images/dices.avif
