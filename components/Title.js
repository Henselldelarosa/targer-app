import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Colors from '../variables/color'

const Title = ({children}) => {
  return (
    // <View>

    // </View>
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:Colors.secondaryLight,
    textAlign: 'center',
    borderWidth:2,
    borderColor:Colors.secondaryLight,
    padding:12
  }
})
