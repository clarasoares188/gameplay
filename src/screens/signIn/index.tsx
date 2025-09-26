import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput} from 'react-native';
import { stylesSignIn } from './styles';
import { useState } from 'react';

export function SignIn() {
  const [text,setText] = useState("");
  return (
    <View style={stylesSignIn.container}>
      <Text>tela de entrada</Text>
      <TextInput style={stylesSignIn.textInput} onChangeText={setText}/>
      <Text> Voce digitou: {text}</Text>
    </View>
  );
}