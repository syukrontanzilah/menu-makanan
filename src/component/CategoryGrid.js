import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { fonts } from '../asset/fonts'
import { Colors } from '../constant/Colors'

const CategoryGrid = (props) => {
    return (
        <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.gridItem, {}]}
        onPress={props.onSelect}>
        <ImageBackground
            source={{ uri: props.image }}
            style={{ 
                height: '100%', 
                width: '100%',
                 }}>
            <View style={{ 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                padding: 0 }}>
                <Text style={{
                    letterSpacing: 2,
                    color: props.color,
                    fontFamily: fonts.tiki,
                    fontSize: 25,
                    elevation: 10,
                }}>
                    {'  '}{props.title}</Text>
            </View>

        </ImageBackground>
    </TouchableOpacity>
    )
}

export default CategoryGrid

const styles = StyleSheet.create({
    gridItem: {
        margin: 10,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2,
        borderRadius:10
    }
})
