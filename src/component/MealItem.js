import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { fonts } from '../asset/fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MealItem = (props) => {
    return (
        <TouchableOpacity
        activeOpacity={0.5}
            onPress={props.onSelectMeal}
            style={styles.container}>
            <ImageBackground
                style={{ height: 200, width: '100%' }}
                source={{ uri: props.imageUrl }}>
            <View style={styles.mealRow}>
                <Text style={styles.title}>{props.title} </Text>
                <View style={{flexDirection:'row'}}>
                    <Ionicons name="alarm-outline" size={13} color="lightgray"/>
                <Text style={styles.minuts}> {props.duration}min </Text>
                <Text style={styles.minuts}>- {props.complexity} </Text>
                <Text style={styles.minuts}>- {props.affordability}</Text>
                </View>  
                   </View>     
            </ImageBackground>
            
        </TouchableOpacity>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        // height: 250,
        width: '100%',
        // backgroundColor: 'wheat',
        // paddingBottom: 8,
        marginBottom:8
    },
    mealRow: {
        // flexDirection: 'row'
        paddingHorizontal:5,
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingVertical:2
      
    },
    title: {
        fontFamily: fonts.tiki,
        fontSize: 25,
        color:'wheat',
        letterSpacing:1
    },
    minuts: {
        fontFamily: fonts.default,
        fontSize: 16,
        color: 'lightgray', 
        marginTop:-5

    }
})
