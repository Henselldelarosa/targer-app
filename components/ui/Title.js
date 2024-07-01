import React from 'react'
import {Text, View, StyleSheet, Platform} from 'react-native'
import Colors from '../../variables/color'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    textAlign: 'center',
    borderWidth:2,
    borderColor:'white',
    padding:12,
    marginTop: Platform.OS === 'android' ? 30 : 0
  }
})
