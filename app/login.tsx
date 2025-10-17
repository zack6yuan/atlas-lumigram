import { Link, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function loginPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Link href="/register" replace>
        <Text>Create a new account</Text>
      </Link>
      <Pressable onPress={() => {router.replace("/(tabs)/");}}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
}