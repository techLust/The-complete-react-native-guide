import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CounterScreen from "./CounterScreen";

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={[styles.textStyle, styles.background]}>Welcome to home screen</Text>
            <Button
                title="Show friends"
                onPress={() => navigation.navigate('ComponentScreen')}
            />
            <Button 
            style={styles.imageBtnStyle}
            title="Images"
            onPress={() => navigation.navigate('ImageScreen')}
            />

            <CounterScreen />
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
    },
    imageBtnStyle: {
        marginTop: 20
    }
})

export default HomeScreen;