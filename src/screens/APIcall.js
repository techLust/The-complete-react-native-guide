import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import axios from 'axios'


const APIcall = (props) => {
    // console.log("PROPS FORM GRILFRIENDS SCREEN", props)
    const [product, setProduct] = useState([])

    const fetctAllProduct = async () => {
        try {
            console.log('API called')
            // const allProduct = await axios.get("http://192.168.5.93:4000/get/product");
            const allProduct = await axios.get("http://localhost:4000/get/product");
            console.log('PRODUCT FETCHED', allProduct.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetctAllProduct()
    }, [])

    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}
            >
                <Text style={{ fontSize: 40, textAlign: 'center' }}>Tap to go back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default APIcall

const styles = StyleSheet.create({})