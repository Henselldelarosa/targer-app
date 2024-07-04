import React from 'react'
import {View, StyleSheet} from 'react-native'
import Colors from '../../variables/color'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles= StyleSheet.create({
  card: {
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    marginTop:36,
    backgroundColor:Colors.primaryDark,
    borderRadius:8,
    marginHorizontal:24,
    elevation:8, //This adds a shadow on android devices and only andrioid

    //This how you add shadown on IOS
    shadowColor: 'black',
    shadowOffset:{width:0, height:2},
    shadowRadius:6,
    shadowOpacity:0.25
  },
})
