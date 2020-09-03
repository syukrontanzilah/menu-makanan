import React from 'react'
import { StyleSheet, Text, View, FlatList, } from 'react-native'
import MealItem from './MealItem'

const MealList = (props) => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title
                        }
                    })
                }}
            />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{}}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    container: {

    }
})
