import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, onPress} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PairButton from '../components/PairButton';
import { createStackNavigator } from '@react-navigation/stack';
import OKButton from '../components/OKButton';


function Welcomsc(props) {

    return (
        <ImageBackground 
            style={styles.background}>
            <Image style={styles.logo} source={require('../assets/background.png')}/>
            <PairButton title= "Pair with SOAREBOARD"/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#1D1F21"
    },
    logo:{
        width: 400,
        height: 400,
        position: 'absolute',
        top: 200,
        
    }

})
export default Welcomsc;