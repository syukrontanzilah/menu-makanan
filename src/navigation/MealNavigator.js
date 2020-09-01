import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../Page/CategoriesScreen';
import CategoryMealsScreen from '../Page/CategoryMealsScreen';
import MealDetailScreen from '../Page/MealDetailScreen';


const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,

    },
    MealDetail: MealDetailScreen
})

export default createAppContainer(MealNavigator);


const styles = StyleSheet.create({})
