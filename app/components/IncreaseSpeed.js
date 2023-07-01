import React from 'react';
import { StyleSheet, Text, TouchableOpacity, onPress } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Speed from '../screens/Speed';
import { SafeAreaView } from 'react-native-safe-area-context';


function IncreaseSpeed({title}) {
    
    return (
        <TouchableOpacity style={styles.button}  onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: 'center',
        padding: 15,
        width: '40%',
        height:'25%',
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: 30,
    },
    text:{
        color: 'white',
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight:'bold', 
    }
})
export default IncreaseSpeed;