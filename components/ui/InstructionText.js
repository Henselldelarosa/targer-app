import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../../variables/color'

const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText:{
    fontFamily: 'open-sans',
    color:Colors.secondaryLight,
    fontWeight:'bold',
    fontSize:24
  },
})
