import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {HeaderButton} from  'react-navigation-header-buttons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constant/Colors'

const CustomHeaderButton = (props) => {
    return (
      <HeaderButton {...props} 
      IconComponent ={Ionicons}
      iconSize={24}
      color={Colors.primary}
      />
    )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})
