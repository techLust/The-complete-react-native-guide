import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const ImageDetails = ({title, image, imageScore}) => {
  return (
    <View>
        <Image source={image}/>
      <Text>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  )
}

export default ImageDetails

const styles = StyleSheet.create({})