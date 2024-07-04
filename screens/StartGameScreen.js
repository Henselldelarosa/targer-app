import {TextInput, View, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../variables/color'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({onPick}) => {

  const [enteredNumber, setEnteredNumber] = useState('')

  const handleInput = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const handleReset = () => {
    setEnteredNumber('')
  }

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid Number',
      'Number has to be a number between 1 and 99.',
      [{text: "Okey", style: 'destructive', onPress: handleReset}]
       )
      return
    }
    onPick(chosenNumber)
  }

  return (
  <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>

    <Card>

      <InstructionText>Enter A Number</InstructionText>

      <TextInput
      style={styles.numberInput}
      maxLength={2}
      keyboardType='number-pad'
      autoCapitalize='none'
      autoCorrect={false}
      value={enteredNumber}
      onChangeText={handleInput}
      />


      <View style={styles.buttonsContainer}>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>

    </Card>
</View>
  )
}

export default StartGameScreen

const styles= StyleSheet.create({
  rootContainer: {
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  inputText:{
    color:Colors.secondaryLight,
    fontWeight:'bold',
    fontSize:24
  },


  numberInput: {
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor:Colors.secondaryLight,
    borderBottomWidth:2,
    color:Colors.secondaryLight,
    marginVertical:8,
    fontWeight: 'bold',
    textAlign:'center'
  },
  buttonsContainer: {
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1
  }
})
