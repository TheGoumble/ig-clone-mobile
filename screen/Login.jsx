import { View, Text } from "react-native"
import { loginStyles } from "../assets/styles"
import { Input, Button } from "react-native-elements"

export default function Login() {
  return (
    <View style={loginStyles.container}>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />
      <Input placeholder="Password" secureTextEntry={true} />
      <Button title='submit' />
    </View>
  )
}
