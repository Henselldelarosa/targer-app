import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../variables/color'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container:{
    borderWidth:4,
    borderColor: Colors.secondaryLight,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius:8,
    alignItems:'center',
    justifyContent: 'center'
  },

  numberText: {
    color: Colors.secondaryLight,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold'
  }
})
