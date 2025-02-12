import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './variables/color';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [guessRound, setGuessRound] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  const handleNumberPick = (pickNumber) => {
    setUserNumber(pickNumber)
    setGameOver(false)
  }


  const handleGameOver =(numberOfRounds) => {
    setGameOver(true)
    setGuessRound(numberOfRounds)
  }

  let screen = <StartGameScreen onPick={handleNumberPick} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver = {handleGameOver} guessRounds={guessRound}/>
    );
  }

    const handleResetGame = () => {
      setUserNumber(null)
      setGuessRound(0)
    }

  if(gameOver && userNumber){
    screen = <GameOverScreen
              userNumber={userNumber}
              roundsNumber={guessRound}
              resetGame={handleResetGame}
              />
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
