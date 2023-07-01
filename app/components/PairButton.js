import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Speed from '../screens/Speed';
import { useNavigation } from '@react-navigation/native';
import Devices from '../screens/Devices'



function PairButton({title}) {

    const navigation= useNavigation();

    const goToDevices = () => {
        navigation.navigate('Devices');
    };
    
    return (
       <TouchableOpacity style={styles.button}  onPress={goToDevices}>
            <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text:{
        color: '#468FA6',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight:'bold', 
    }
})
export default PairButton;