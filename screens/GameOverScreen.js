import React from 'react'
import {Text, View, StyleSheet, Image, Dimensions, useWindowDimensions} from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../variables/color'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({resetGame, userNumber, roundsNumber}) => {

  const {width, height} = useWindowDimensions()


  let content = (
    <>
     <Title>Game Over</Title>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
        <Text style={styles.summaryText}>Your phone needed
          <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess the
          <Text style={styles.highlight}> {userNumber} </Text>.
      </Text>

      <PrimaryButton onPress={resetGame}>Start New Game</PrimaryButton>
    </>
  )

  let imageSize = 300

  if (width < 380) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width : imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }


  return (
   <View style={styles.gameOverScreenContainer}>
        <Title>Game Over</Title>

<View style={[styles.imageContainer, imageStyle]}>
  <Image style={styles.image} source={require('../assets/images/success.png')}/>
</View>
  <Text style={styles.summaryText}>Your phone needed
    <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess the
    <Text style={styles.highlight}> {userNumber} </Text>.
</Text>

<PrimaryButton onPress={resetGame}>Start New Game</PrimaryButton>
   </View>
  )
}

export default GameOverScreen


const styles = StyleSheet.create({
  gameOverScreenContainer: {
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },

  imageContainer:{
    borderWidth: 3,
    color: Colors.primaryDark,
    overflow: 'hidden',
    margin:36
  },


  image:{
    width:'100%',
    height:'100%'
  },



  summaryText:{
    fontFamily:'open-sans',
    fontSize:24,
    textAlign:'center',
    marginVertical:24
  },


  highlight:{
    fontFamily:'open-sans-bold',
    color:Colors.primaryMiddle
  }
})
