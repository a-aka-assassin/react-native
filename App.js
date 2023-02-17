import { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';


export default function App() {

  const [ bikes, setBikes] = useState([
    { name : 'Kawasaki', id: '1', speed: '400'},
    { name : 'Honda', id: '2', speed: '350'},
    { name: 'Hyndai', id: '3', speed: '300'},
    { name: 'Bugati', id: '4', speed: '250'},
    { name: 'BMW', id: '5', speed: '200'},
    { name: 'Yamaha', id: '6', speed: '150'},
    { name: 'Ducati', id: '7', speed: '100'}
  ]);

  return (
    <View style={styles.container}>

      <FlatList
      keyExtractor={(item) => item.id}
      data={bikes}
      renderItem={({ item })=>(
      <Text style={styles.item}>{item.name}, Speed : {item.speed}</Text>
          
      )}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize:24
  }
});
