import { View, Text } from "react-native"
import { loginStyles } from "../assets/styles"
import { Input } from "react-native-elements"

export default function Login() {
  return (
    <View style={loginStyles.headerbar}>
      <Text style={loginStyles.headerText}>Bocagram</Text>
      <Input placeholder="Password" secureTextEntry={true} />
    </View>
  )
}
