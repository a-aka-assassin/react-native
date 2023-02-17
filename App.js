import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import Header from './components/header';
import Bikes from './components/bikes';
import Form from './components/form';


export default function App() {


  const [ bikes, setBikes] = useState([
    { name : 'Kawasaki', key: '1', speed: '400'},
    { name : 'Honda', key: '2', speed: '350'},
    { name: 'Hyndai', key: '3', speed: '300'},
    { name: 'Bugati', key: '4', speed: '250'},
    { name: 'BMW', key: '5', speed: '200'},
    { name: 'Yamaha', key: '6', speed: '150'},
    { name: 'Ducati', key: '7', speed: '100'}
  ]);

  const pressHandler = (key) => {
    setBikes((prevBikes) => {
        return prevBikes.filter(bike => bike.key !== key);
    })
  }

  const submitHandler = (text) => {
    if(text.length > 2){
      setBikes((prevBikes)=>{
        return [
          {name: text, key: Math.random().toString(), speed: Math.random().toString()},
          ...prevBikes
        ];
      });
    }else{
      Alert.alert('OOOPS', 'Name must be 3 chars long!', [
        {text: 'Understoo'}
      ]);
    }
    
  }

  return (
    <View style={styles.container}>
      
      {/* Header */}
    <Header />
      <View style={styles.content}>

      {/* To Do Form */}
      <View style={styles.content}>
        <Form submitHandler = {submitHandler}/>

        {/* List */}
        <View style={styles.list}>

        <FlatList 
        data={bikes}
        renderItem={({item})=>(
          <Bikes item={item} pressHandler = {pressHandler} />
        )}
        />

        </View>

      </View>

      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list:{
    marginTop: 20
  }
});
