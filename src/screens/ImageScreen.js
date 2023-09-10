import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetails from '../components/ImageDetails'
import AddColors from '../components/AddColors'
import beach from '../../assets/images/beach.jpg'
import forest from '../../assets/images/forest.jpg'
import mountain from '../../assets/images/mountain.jpg'


const ImageScreen = () => {
  return (
    <View>
        <ImageDetails 
        title={'Forest'} 
        image={beach}
        imageScore={7}
        />
        <ImageDetails 
        title={'Beach'} 
        image={forest}
        imageScore={9}
        />
        <ImageDetails 
        title={'Mountain'} 
        image={mountain}
        imageScore={10}
        />

        <AddColors />
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})