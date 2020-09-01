import React, { useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Splash = () => {
    useEffect(() => {
        setTimeout(() => {

        }, 3000);
    }, [])
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'lightblue'
        }}>
            <StatusBar
                backgroundColor="lightblue"
            />
            <Text

                style={{
                    letterSpacing: 1,
                    fontFamily: 'Tiki Tropic',
                    fontSize: 30,
                    color: 'white',
                    elevation: 4
                }}>Menu Ku</Text>
            <View style={{ position: 'absolute', flexDirection: 'row' }}>
                <Ionicons name="heart" size={100} color="orange" style={{ zIndex: 1, opacity: 0.6 }} />
                <Ionicons name="heart" size={100} color="orange" style={{ marginLeft: -70, marginTop: 15, opacity: 0.5, zIndex: 10 }} />
            </View>
            {/* <Ionicons name="fast-food-outline" size={100} color="purple" style={{ position: 'absolute' }} /> */}
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
