import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import axios from "axios";

const HomeScreen = () => {
    const [product, setProduct] = useState([])

    const fetctAllProduct = async () => {
        try {
            console.log('API called')
            const { data: { data } } = await axios.get("http://192.168.62.93:4000/get/product");
            setProduct(data)
        } catch (e) {
            console.log(e)
        }
    }

    console.log('PRODUCT FETCHED', product)


    useEffect(() => {
        fetctAllProduct()
    }, [])

    return (
        <View>
            <Text style={styles.textStyle}>WELCOME TO e-Zone</Text>
            <FlatList
                // horizontal // scroll horizontally by default true.
                // showsHorizontalScrollIndicator={false}
                // showsVerticalScrollIndicator={false}
                data={product}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <View>
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: `${item.url}` }}
                                />
                                <Text>{item.productName}</Text>
                                <Text>{item.productPrice}</Text>
                                <Text>Free delivery</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {

    }
})

export default HomeScreen;