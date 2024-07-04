import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../variables/color'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container:{
    borderWidth:4,
    borderColor: Colors.secondaryLight,
    padding: 24,
    margin:24,
    borderRadius:8,
    alignItems:'center',
    justifyContent: 'center'
  },

  numberText: {
    color: Colors.secondaryLight,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
})
