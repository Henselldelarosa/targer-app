import React,{useEffect, useState} from 'react'
import {StyleSheet, View, Alert } from 'react-native'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText'
import {} from '@expo/vector-icons'

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

const GameScreen = ({userNumber, onGameOver}) => {

  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver()
    }
  },[currentGuess, userNumber, onGameOver])

  const handleNextGuess = (direction) => {
    if(
      (direction === 'lower' && currentGuess < userNumber)
      ||
    (direction === 'greater' && currentGuess > userNumber))
    {
      Alert.alert("You lie", 'You know that is wrong...', [{text: 'Sorry', style: 'cancel'},

      ])
      return;
    }

    if(direction === 'lower'){
     maxBoundary = currentGuess
    }else{
      minBoundary = currentGuess + 1
    }

    const newNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newNum)
  }

  return (
    <View style={styles.screen}>

      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* GUESS */}
      <Card>

        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>

        <View style={styles.buttonsContainer}>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>-</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>+</PrimaryButton>
          </View>

        </View>
      </Card>

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
  },
  instructionText: {
    marginBottom:12
  },

  buttonsContainer: {
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1
  }
})
