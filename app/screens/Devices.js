import React from 'react';
import {
    StyleSheet, SafeAreaView
} from 'react-native'
import OKButton from '../components/OKButton';

function Devices(props) {

    return (
    <SafeAreaView style={styles.container}>
        <OKButton title= "Connect" />
    </SafeAreaView>
)}
const styles = StyleSheet.create({
    container: {
      flex: 1, // means that is flexible (takes the entire screen)
      backgroundColor: '#1E4956',
      alignItems: 'center',
      paddingTop: "166%"
    },
    text:{
      color: "white"
    },
  })
  
export default Devices;