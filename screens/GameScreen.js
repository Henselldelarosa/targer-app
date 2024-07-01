import React,{useState} from 'react'
import { Text, StyleSheet, View, Alert, Platform } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../variables/color'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  }else{
    return rndNum
  }
}


let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({userNumber}) => {

  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const handleNextGuess = (direction) => {
    if(
      (direction === 'lower' && currentGuess < userNumber)
      ||
    (direction === 'greater' && currentGuess > userNumber))
    {
      Alert.alert("You lie", [{text: 'Sorry', style: 'cancel'},

      ])
      return;
    }

    if(direction === 'lower'){
     maxBoundary = currentGuess
    }else{
      minBoundary = currentGuess + 1
    }

    console.log(minBoundary,maxBoundary)
    const newNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newNum)
  }

  return (
    <View style={styles.screen}>

      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* GUESS */}
      <View>

        <Text style={''}>Higher or Lower?</Text>

        <View>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>+</PrimaryButton>

        </View>
      </View>

      <View>

      </View>
    </View>
   )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:24
  }
})
