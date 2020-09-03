import React, { useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import { fonts } from '../asset/fonts';
import DefaultText from '../component/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
    const Icon = () => {
        if (props.type === "radio") {
            return <Ionicons name="radio-button-on-outline" color="#474747" />
        }
        else {
            return <Ionicons name="caret-forward-outline" color="#474747" />
        }
    }
    return (
        <View style={styles.listItem}>
            <Icon name="caret-forward-outline" color="#474747" />
            <View style={{ flex: 1, marginLeft: 5, marginBottom: 0, marginTop: -6 }}>
                <DefaultText>{props.children}</DefaultText>
            </View>
        </View>
    )
}

const MealDetailScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        // props.navigation.setParams({ mealTitle: selectedMeal.title })
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.page}>
            <ImageBackground
                source={{ uri: selectedMeal.imageUrl }}
                style={{ width: '100%', height: 220, }} />
            <View style={{ flexDirection: 'row', borderRadius: 100 / 2 }}>
                <View style={styles.box}>
                    <Ionicons name="alarm-outline" size={14} color="gray" />
                    <Text style={styles.texBox}> {selectedMeal.duration} Minutes</Text>
                </View>
                <View style={styles.box}>
                    <Ionicons name="server-outline" size={14} color="gray" />
                    <Text style={styles.texBox}> {selectedMeal.affordability}</Text>
                </View>
                <View style={styles.box}>
                    <Ionicons name="sad-outline" size={14} color="gray" />
                    <Text style={styles.texBox}> {selectedMeal.complexity}</Text>
                </View>
            </View>
            {/* content container */}
            <View style={{ paddingHorizontal: 15, paddingBottom: 20 }}>
                {/* <Text>{selectedMeal.title}</Text> */}
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <Ionicons name="document-text-outline" size={18} />
                    <Text style={{ fontSize: 22, fontFamily: fonts.tiki, marginLeft: 8 }}>Ingredients:</Text>
                </View>

                <DefaultText>- {selectedMeal.ingredients.join('\n- ')}</DefaultText>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', marginBottom: 5 }}>
                    <Ionicons name="restaurant" size={18} />
                    <Text style={{ fontSize: 22, fontFamily: fonts.tiki, marginLeft: 8 }}>Cook Steps:</Text>
                </View>

                {/* <DefaultText>- {selectedMeal.steps.join('\n- ')}</DefaultText> */}
                {
                    selectedMeal.steps.map(step =>
                        <ListItem key={step}>{step}</ListItem>)
                }

                {/* <Text>Meal Information:</Text>
                <Text>Gluten = {selectedMeal.isGlutenFree}</Text>
                <Text>Lactose = {selectedMeal.isLactoseFree}</Text>
                <Text>Vegan = {selectedMeal.isVegan}</Text>
                <Text>Vegetarian = {selectedMeal.isVegetarian}</Text>
                <Text>Cook Type: {selectedMeal.complexity}</Text> */}
            </View>
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    return {
    headerTitle: <Text style={{ fontFamily: fonts.tiki, fontSize: 22, color: '#474747' }}>{mealTitle}</Text>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="heart"
                onPress={toggleFavorite}
            />
        </HeaderButtons>
    }
}

export default MealDetailScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,

    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        // marginBottom: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        paddingVertical: 5,
    },
    texBox: {
        fontFamily: fonts.default,
        fontSize: 17,
        color: 'gray',
        marginBottom: 5
    },
    listItem: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 4
    }
})
