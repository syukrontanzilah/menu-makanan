import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetailScreen = () => {
    return (
        <View style={styles.page}>
            <Text>meal detail</Text>
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
