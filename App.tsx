import { StyleSheet, Text, View } from 'react-native';
import { MyProvider } from './Context/MyProvider';
import Home from './pages/Home';

export default function App() {
  return (
    <MyProvider>
      <View style={styles.container}>
        <Home/>
      </View>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
