import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import { fonts } from '../asset/fonts';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.page}>
            <ImageBackground
                source={{ uri: selectedMeal.imageUrl }}
                style={{ width: '100%', height: 220, }} />
            <View style={{ paddingHorizontal: 15 }}>
                {/* <Text>{selectedMeal.title}</Text> */}

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <Ionicons name="document-text-outline" size={18} />
                    <Text style={{ fontSize: 22, fontFamily: fonts.tiki, marginLeft:8}}>Ingredients:</Text>
                </View>

                <Text style={{ fontFamily: fonts.default, fontSize: 20 }}>* {selectedMeal.ingredients.join('\n* ')}</Text>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <Ionicons name="restaurant" size={18} />
                    <Text style={{ fontSize: 22, fontFamily: fonts.tiki, marginLeft: 8 }}>Cook Steps:</Text>
                </View>

                <Text style={{ fontFamily: fonts.default, fontSize: 20, }}>- {selectedMeal.steps.join('\n- ')}</Text>

                {/* <Text>Meal Information:</Text>
                <Text>Gluten = {selectedMeal.isGlutenFree}</Text>
                <Text>Lactose = {selectedMeal.isLactoseFree}</Text>
                <Text>Vegan = {selectedMeal.isVegan}</Text>
                <Text>Vegetarian = {selectedMeal.isVegetarian}</Text>
                <Text>Cook Type: {selectedMeal.complexity}</Text> */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Ionicons name="alarm-outline" size={20} color="gray" />
                    <Text style={{ fontFamily: fonts.default, fontSize: 20, color: 'gray' }}> {selectedMeal.duration} Minutes</Text>
                </View>

            </View>




        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: <Text style={{ fontFamily: fonts.tiki, fontSize: 22, color: '#474747' }}>{selectedMeal.title}</Text>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="heart"
                onPress={() => { }}
            />
        </HeaderButtons>
    }
}

export default MealDetailScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,

    }
})
