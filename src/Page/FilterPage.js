import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../component/HeaderButton'
import Colors from '../constant/Colors'
import { fonts } from '../asset/fonts'



const FilterPage = (props) => {
    return (
        <View style={styles.page}>
            <Text>filter page </Text>
        </View>
    )
}

FilterPage.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => { 
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        // headerTitle: 'My Favorite',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: Colors.primary,
    }
}

FilterPage.navigationOptions = {
    headerTitle: 'Filter Meals'
}

export default FilterPage

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
