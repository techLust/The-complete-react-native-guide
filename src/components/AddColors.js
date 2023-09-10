import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

const AddColors = () => {
    const [colors, setcolors ] = useState([]);
  return (
    <View>
      <Button 
      title={'AddColors'}
      onPress={() => setcolors([...colors, randomRGB()])}
       />

       <View>
        <FlatList
            data={colors}
            renderItem={({item, index}) => {
              return  <View style={{height: 100, width: 100, backgroundColor: item}}></View>
            }}
            />
       </View>
    </View>
  )
}



export default AddColors

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({})