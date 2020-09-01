import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constant/Colors'

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.page}>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to details"
                onPress={() => {
                    props.navigation.navigate({ routeName: 'MealDetail' })
                }} />
            <Button title="Go back"
                onPress={() => {
                    props.navigation.pop()
                }} />
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
        justifyContent: 'center',
        alignItems: 'center'
    }
})
