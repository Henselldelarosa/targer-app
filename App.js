import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
      source={require('./assets/images/dices.png')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroudImage}
      >
        <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroudImage:{
    opacity:.15
  }
});

///Users/henselldelarosa/Programming/udemy/react-native/target-app/assets/images/dices.avif
