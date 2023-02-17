import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Bikes({ item, pressHandler }){
   
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style = {styles.item}>{item.name}, Speed: {item.speed}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})