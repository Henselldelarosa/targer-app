import {TextInput, View, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'


const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad'/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles= StyleSheet.create({
  inputContainer: {
    // flex: 1,
    padding:16,
    marginTop:100,
    backgroundColor:'#72063c',
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
    borderBottomColor:'#ddb52f',
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical:8,
    fontWeight: 'bold',
    textAlign:'center'
  }
})
