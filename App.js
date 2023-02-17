import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [name, setName] = useState('Yamaha');
  const [speed, setSpeed] = useState('450');

  const clickHandler = () => {
    setName('Bugatti');
    setSpeed('560');
  }

  return (
    <View style={styles.container}>
      <Text>Enter The Name Of The Bike:</Text>
      <TextInput 
      style = {styles.input}
      placeholder = 'e.g Honda'
      onChangeText={(val)=>setName(val)}/>

      <Text>Enter Price:</Text>
      <TextInput style = {styles.input}
      keyboardType='numeric'
      placeholder='e.g 40000'
      onChangeText={(val)=>setSpeed(val)}
      />
      <Text>{ name }</Text>
      <Text>This bike's speed is {speed} KM/H</Text>

      <View style = {styles.buttonContainer}>
        <Button title = 'Default Values' onPress={clickHandler}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
