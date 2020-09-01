import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, } from 'react-navigation';
import CategoriesScreen from '../Page/CategoriesScreen';
import CategoryMealsScreen from '../Page/CategoryMealsScreen';
import MealDetailScreen from '../Page/MealDetailScreen';
import Colors from '../constant/Colors';
import { fonts } from '../asset/fonts';
import FavoriteScreen from '../Page/FavoriteScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            // headerTitle: 'Meals Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {}

    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            // headerTitle: 'Detail'
        }
    },

}, {
    mode: 'card',
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white',
        }
    }
})

const MealFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealNavigator,
        navigationOptions:{
            tabBarLabel:(tabLabel) => {
                return <Text style={{textAlign:'center', fontFamily: fonts.tiki, color: tabLabel.tintColor, marginBottom:4, marginTop:-4, fontSize:16}}>Meal</Text>
            }, 
            tabBarIcon: (tabInfo) =>{
                return <Ionicons name = "fast-food" size={20} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: { 
        screen: FavoriteScreen,
        navigationOptions:{
            tabBarLabel:(tabLabel) => {
                return <Text style={{textAlign:'center', fontFamily: fonts.tiki, color: tabLabel.tintColor, marginBottom:4, marginTop:-10, fontSize:16}}>Favorite</Text>},
            tabBarIcon: (tabInfo) =>{
                return <Ionicons name = "heart" size={20} color={tabInfo.tintColor} />
            } 
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.primary
    }
})


export default createAppContainer(MealFavTabNavigator);


const styles = StyleSheet.create({})
