import React,{useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Title from '../components/Title'
import Colors from '../variables/color'

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max-min)) + min

  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  }else{
    return rndNum
  }
}


const GameScreen = ({userNumber}) => {

  const initialGuess = generateRandomBetween(1, 100, userNumber)


  return (
    <View style={styles.screen}>

      <Title>Opponent's Guess</Title>
      <Text></Text>
      {/* GUESS */}
      <View>

        <Text style={''}>Higher or Lower?</Text>
        {/* + - */}
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
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:Colors.secondaryLight,
    textAlign: 'center',
    borderWidth:2,
    borderColor:Colors.secondaryLight,
    padding:12
  }
})
