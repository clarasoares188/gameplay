import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput} from 'react-native';
import { stylesSignIn } from './styles'

export function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Text>tela de entrada</Text>
      <TextInput style={{width:200,height:50,borderWidth:2}}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}; ,
