import React from 'react'
import {Text, StyleSheet, Platform} from 'react-native'


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
    borderWidth:Platform.OS ==='android' ? 2: 0,
    borderColor:'white',
    padding:12,
    // marginTop: Platform.OS === 'android' ? 30 : 10,
    maxWidth:'80%',
    minWidth:'80%'
  }
})
