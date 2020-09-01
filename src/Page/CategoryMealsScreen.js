import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constant/Colors'
import MealItem from '../component/MealItem'

const CategoryMealsScreen = (props) => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl ={itemData.item.imageUrl}
                duration = {itemData.item.duration}
                complexity ={itemData.item.complexity}
                affordability ={itemData.item.affordability}
                onSelactMeal={() => { }}
            />
        )
    }
    const catId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    )

    return (
        <View style={styles.page}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{}}
            />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
        headerTintColor: selectedCategory.color
    }

}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding:10
    }
})
