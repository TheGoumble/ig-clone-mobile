import { StyleSheet,SafeAreaView } from 'react-native';
import Login from "./screen/Login"
import PhotoList from './screen/PhotoList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea} >
    <Login/>
    <PhotoList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
});
