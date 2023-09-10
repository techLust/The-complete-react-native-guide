import React from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";

const ComponentScreen = ({navigation}) => {

    const friends = [
        { name: 'Sumit', age: 90 },
        { name: 'Sajjad', age: 90 },
        { name: 'Chaitainya', age: 90 },
        { name: 'Romio', age: 90 },
        { name: 'Tausif', age: 90 },
        { name: 'Samirul', age: 90 },
        { name: 'Arif', age: 90 },
        { name: 'Pavan', age: 90 },
    ]

    return (
        <View>
            <Text style={styles.textStyle}>Hey all! what's goin on.</Text>
            <Button
                title="Find girl friends"
                onPress={() => {
                    console.log('Girl friends button clicked')
                    navigation.navigate('GirlFriends')
                }}
            />
            <FlatList
                // horizontal // scroll horizontally by default true.
                // showsHorizontalScrollIndicator={false}
                // showsVerticalScrollIndicator={false}
                data={friends}
                renderItem={({ item, index }) => {
                    console.log(item)
                    return (
                        <View style={styles.listStyle}>
                            <Text
                                style={styles.listContent}>
                                {index}
                                Name: {item.name}
                                Age:  {item.age}</Text>
                        </View>
                    )
                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 35,
        color: 'green'
    },
    listStyle: {
        alignItems: 'center'
    },
    listContent: {
        fontSize: 30,
        paddingBottom: 50
    }
})

export default ComponentScreen;

