import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constant/Colors'
import MealItem from '../component/MealItem'
import { fonts } from '../asset/fonts'

const CategoryMealsScreen = (props) => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl ={itemData.item.imageUrl}
                duration = {itemData.item.duration}
                complexity ={itemData.item.complexity}
                affordability ={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName: 'MealDetail', 
                    params: {
                        mealId: itemData.item.id
                    }})
                 }}
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
        headerTitle: <Text style={{fontFamily: fonts.tiki, fontSize:30, color: "#474747"}}>{selectedCategory.title}</Text>,
        // headerTintColor: selectedCategory.color
    }

}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginHorizontal:10
    }
})
