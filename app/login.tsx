import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

export default function loginPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/images/logo.png")}></Image>
      <Text style={styles.text}>Login</Text>
      <Pressable onPress={() => {router.replace("/(tabs)/");}}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
      <Link href="/register" replace>
        <Text style={styles.text}>Create a new account</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000435',
  },
  logo: {
    resizeMode: 'contain',
    width: 250,
    height: 200,
  },
  text: {
    color: 'white',
  }
})