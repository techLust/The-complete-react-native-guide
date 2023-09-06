import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={[styles.textStyle, styles.background]}>Welcome to home screen</Text>
            <Button
                title="Go to other screen"
                onPress={() => navigation.navigate('ComponentScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'red',
        padding: 5
    },
    background: {
        backgroundColor: 'yellow'
    }
})

export default HomeScreen;