import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SquareScreen from "./SquareScreen";
import { Entypo } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.viewStyle}>
            <Text style={[styles.textStyle, styles.background]}>
                <Entypo name="home" size={24} color="black" />
                Welcome to home screen</Text>
            <Button
                title="Show friends"
                onPress={() => navigation.navigate('ComponentScreen')}
            />
            <Button
                style={styles.imageBtnStyle}
                title="Images"
                onPress={() => navigation.navigate('ImageScreen')}
            />
            {/* <CounterScreen /> */}
            <SquareScreen />
            <Button

                title="Handle Input"
                onPress={() => navigation.navigate('TextScreen')}
            />
            <Button

                title="Call API"
                onPress={() => navigation.navigate('APIcall')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center', // by default layout is flex.
        flexDirection: 'column', // By default
        // ...StyleSheet.absoluteFillObject, // This style positions the child element absolutely

    },
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