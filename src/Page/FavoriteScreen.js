import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../asset/fonts'

const FavoriteScreen = () => {
    return (
        <View style={styles.page}>
            <Text style={{fontFamily:fonts.tiki, fontSize:20}}>Your Favorite Meal is here</Text>
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
