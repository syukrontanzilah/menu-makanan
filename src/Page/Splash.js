import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Splash = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor:'lightblue' }}>
            <StatusBar
            backgroundColor="lightblue"
            />
            <Text
                style={{ fontFamily: 'Tiki Tropic', fontSize: 30, color: 'salmon', elevation: 4 }}>Menu Ku</Text>
            <View style={{position:'absolute', opacity:0.5}}>
                <Ionicons name="heart" size={100} color="orange" />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
