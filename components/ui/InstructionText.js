import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../../variables/color'

const InstructionText = ({children}) => {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText:{
    color:Colors.secondaryLight,
    fontWeight:'bold',
    fontSize:24
  },
})
