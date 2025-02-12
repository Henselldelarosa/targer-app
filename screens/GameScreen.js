import React,{useEffect, useState} from 'react'
import {StyleSheet, View, Alert, FlatList, useWindowDimensions } from 'react-native'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText'
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem'

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
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const {width, height} = useWindowDimensions()

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  },[currentGuess, userNumber, onGameOver])


  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  },[])

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

    const newNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess)

    setCurrentGuess(newNum)
    setGuessRounds( prevGuess => [newNum, ...prevGuess, ])
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
        <Card>

        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>

        <View style={styles.buttonsContainer}>

          <View style={styles.buttonContainer}>

            <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color="white"/>
            </PrimaryButton>

          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>
              <Ionicons name="add" size={24} color={"white"}/>
            </PrimaryButton>
          </View>

        </View>
      </Card>
    </>
  )

  if( width > 500) {
    content = (
      <>
        {/* <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText> */}
        <View style={styles.buttonContainerWide}>
        <View style={styles.buttonContainer}>

          <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>
            <Ionicons name="remove" size={24} color="white"/>
          </PrimaryButton>

          </View>
        <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>
            <Ionicons name="add" size={24} color={"white"}/>
          </PrimaryButton>
          </View>
        </View>
      </>
    )
  }
  const guessCurrentRound = guessRounds.length
  return (
    <View style={styles.screen}>

      <Title>Opponent's Guess</Title>
        {content}
      <View>

      </View>
      <View style={styles.listContainer}>
        <FlatList
        data={guessRounds}
        renderItem={(itemData) => <GuessLogItem roundNumber={guessCurrentRound - itemData.index} guess={itemData.item}/>}
        keyExtractor={(item) => item}
        />
      </View>
    </View>
   )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:24,
    alignItems:'center'
  },
  instructionText: {
    marginBottom:12
  },

  buttonsContainer: {
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1
  },

  buttonContainerWide: {
    flexDirection: 'row',
    alignItems:'center'
  },

  listContainer:{
    flex:1,
    padding:16
  }
})
