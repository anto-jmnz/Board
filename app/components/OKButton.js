import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Speed from '../screens/Speed';


function OKButton({title}) {

    const navigation= useNavigation();

    const goToSpeed = () => {
        navigation.navigate('Speed');
    };
    
    return (
       <TouchableOpacity style={styles.button}  onPress={goToSpeed}>
            <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        width: '100%',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight:'bold', 
    },
    text:{
        color: '#468FA6',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight:'bold', 
    }
})
export default OKButton;