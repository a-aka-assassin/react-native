import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Form({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler =(val)=>{
        setText(val);
    }

    return(
        <View>
            <TextInput 
            style={StyleSheet.input}
            placeholder='New Bike....'
            onChangeText={changeHandler}

            />
            <Button onPress={()=>submitHandler(text)} title='Add Bike' color='coral'></Button>
        </View>
    )
}


const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})