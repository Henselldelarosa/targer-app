import {TextInput, View, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../variables/color'

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
    <View style={styles.inputContainer}>
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

    </View>
  )
}

export default StartGameScreen

const styles= StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    marginTop:100,
    backgroundColor:Colors.primaryDark,
    borderRadius:8,
    marginHorizontal:24,
    elevation:8, //This adds a shadow on android devices and only andrioid

    //This how you add shadown on IOS
    shadowColor: 'black',
    shadowOffset:{width:0, height:2},
    shadowRadius:6,
    shadowOpacity:0.25
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
