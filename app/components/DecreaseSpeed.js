import React from 'react';
import { StyleSheet, Text, TouchableOpacity, onPress } from 'react-native';



function DecreaseSpeed({title}) {
    
    return (
        <TouchableOpacity style={styles.button}  onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "yellowgreen",
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
        color: "white",
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight:'bold', 
    },
})
export default DecreaseSpeed;