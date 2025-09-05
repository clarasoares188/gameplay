import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text>tela de entrada</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df9be6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});