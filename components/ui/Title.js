import React from 'react'
import {Text, View, StyleSheet, Platform} from 'react-native'


const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontFamily:'open-sans-bold',
    fontSize:24,
    color:'white',
    textAlign: 'center',
    borderWidth:2,
    borderColor:'white',
    padding:12,
    marginTop: Platform.OS === 'android' ? 30 : 0,
    maxWidth:'80%',
    minWidth:'80%'
  }
})
