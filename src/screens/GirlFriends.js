import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GirlFriends = (props) => {
    console.log("PROPS FORM GRILFRIENDS SCREEN",props)
    return (
        <View>
            <Text style={{fontSize: 30}}> Your GirlFriends are waiting for you</Text>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('ComponentScreen')}
            >
                <Text style={{fontSize: 40}}>Touchable Opacity</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GirlFriends

const styles = StyleSheet.create({})