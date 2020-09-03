import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../asset/fonts'
import MealList from '../component/MealList'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import Colors from '../constant/Colors'
import {useSelector} from 'react-redux'

const FavoriteScreen = (props) => {
const favMeals = useSelector(state => state.meals.favoriteMeals)
    return (
        <View style={styles.page}>
            {/* <Text style={{fontFamily:fonts.tiki, fontSize:20}}>Your Favorite Meal is here</Text> */}
            <MealList
            listData ={favMeals}
            navigation ={props.navigation}
            />
        </View>
    )
}

FavoriteScreen.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => { 
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerTitle: 'My Favorite',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: Colors.primary,
    }
}

export default FavoriteScreen

const styles = StyleSheet.create({
    page: {
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    }
})
