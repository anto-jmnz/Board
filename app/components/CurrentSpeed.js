import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, onPress } from 'react-native';



function CurrentSpeed({title}) {
    
    return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: '32%',
    },
      text:{
        color: "white",
        fontSize: 30,
        fontFamily: "serif",
    }
})
export default CurrentSpeed;