import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {stylesSignin} from './styles'

export function SignIn() {
  return (
    <View style={stylesSignin.container}>
      <Text>tela de entrada</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df9be6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});