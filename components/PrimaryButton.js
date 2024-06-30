import {View, Text, Pressable, StyleSheet} from 'react-native'

const PrimaryButton = ({children}) => {

  const pressHandler = () => {
    console.log('pressed')
  }
  return (
    <View style={styles.buttonOutterContainer}>
        <Pressable
        onPress={pressHandler}
        android_ripple={{color:'#640233'}}
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
    backgroundColor: "#72063c",
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
