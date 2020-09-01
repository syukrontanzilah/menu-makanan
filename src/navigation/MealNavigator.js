import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../Page/CategoriesScreen';
import CategoryMealsScreen from '../Page/CategoryMealsScreen';
import MealDetailScreen from '../Page/MealDetailScreen';
import Colors from '../constant/Colors';
import { fonts } from '../asset/fonts';


const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meals Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {}

    },
    MealDetail: { 
        screen:MealDetailScreen,
        navigationOptions:{
            headerTitle: 'Detail'
        }
    },

}, {
    mode:'card',
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white', 
        }
    }
})

export default createAppContainer(MealNavigator);


const styles = StyleSheet.create({})
