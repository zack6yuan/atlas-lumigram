import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function registerPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Register</Text>
      <Link href="/login" replace>
        <Text>Login to an existing account</Text>
      </Link>
    </View>
  );
}