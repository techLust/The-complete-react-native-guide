import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const reducer = (state, action) => {
    // switch(action.)
    console.log("STATE", state, "ACTION", action);
    
    switch (action.color) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.blue };
        default:
            return state;
    }
}

const SquareScreen = () => {
    const initialState = {
        red: 0,
        green: 0,
        blue: 0
    }
    const [state, dispath] = useReducer(reducer, initialState)

    return (
        <View>
            <Text style={styles.textStyle}>SquareScreen</Text>
            <Button 
            title='Show Action'
            onPress={() => dispath({color: 'red', amount: 15})}
            />
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({
    textStyle: {
        color: 'green',
        fontSize: 20,
        textAlign: 'center'
    }
})