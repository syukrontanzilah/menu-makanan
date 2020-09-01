import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MEALS } from '../data/dummy-data';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import { fonts } from '../asset/fonts';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <View style={styles.page}>
            <Text>{selectedMeal.title}</Text>

        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
    headerTitle: <Text style={{fontFamily: fonts.tiki, fontSize:22, color:'#474747'}}>{selectedMeal.title}</Text> ,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="heart" 
            onPress={()=> {}}
            />
              {/* <Item title="Favorite" iconName="heart-outline" 
            onPress={()=> {}}
            /> */}
            
        </HeaderButtons>
    }
}

export default MealDetailScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,

    }
})
