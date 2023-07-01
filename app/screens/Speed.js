import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import IncreaseSpeed from '../components/IncreaseSpeed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DecreaseSpeed from '../components/DecreaseSpeed';
import CurrentSpeed from '../components/CurrentSpeed';


function Speed({props}) {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentSpeed title = "Current Speed:" />
      <IncreaseSpeed title= "+" />
      <DecreaseSpeed title ="-" />
    </SafeAreaView>
)}


const styles = StyleSheet.create({
  container: {
    flex: 1, // means that is flexible (takes the entire screen)
    backgroundColor: '#1E4956',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  },
  text:{
    color: "white"
  },
})
export default Speed;
