import {View, Text, Pressable, StyleSheet} from 'react-native'
import Colors from '../variables/color'
const PrimaryButton = ({children, onPress}) => {



  return (
    <View style={styles.buttonOutterContainer}>
        <Pressable
        onPress={onPress}
        android_ripple={{color:Colors.primaryMiddle}}
        style={({pressed})=> pressed ? [styles.buttoInnerContainer, styles.pressed] : styles.buttoInnerContainer}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
  )
}

export default PrimaryButton


const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius:28,
    margin:4,
    overflow:'hidden'
  },

  buttoInnerContainer: {
    backgroundColor: Colors.primaryLight,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,

  },

  buttonText:{
    color:'white',
    textAlign:'center'
  },
  pressed:{
    opacity:0.75,
  }
})
