import React  from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
    return <Text style={styles.textStyle}>Hey all! what's goin on. Let's walk and talk</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'green'
    }
})

export default ComponentScreen;

