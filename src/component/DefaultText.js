import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../asset/fonts'

const DefaultText = (props) => {
    return <Text style={styles.text}>{props.children}</Text>
}

export default DefaultText

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.default,
        fontSize:20,
        color: '#474747'
    }
})
