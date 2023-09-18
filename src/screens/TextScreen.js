import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const TestComponet = () => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    password: ''
  });


  const handleSubmit = () => {
    console.log('Submit form clicked')
    console.log(input)
  }

  return (
    <View>
      <Text style={styles.text} >Name </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={input.name}
        onChangeText={(name) => setInput(prev => ({ ...prev, name }))}
      />
      <Text style={styles.text}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={input.age}
        onChangeText={(age) => setInput(prev => ({ ...prev, age }))}
      />

      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={input.password}
        onChangeText={(password) => setInput(prev => ({ ...prev, password }))}
      />
      <Button
        style={styles.btn}
        title={'Submit'}
        onPress={() => handleSubmit()}
      />
    </View>
  )
}

export default TestComponet

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    height: 40
  },
  btn: {
    width: 2
  },
  text: {
    marginLeft: 10
  }

})