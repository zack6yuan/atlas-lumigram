import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function loginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  // Needs fix: incorrect password is still allowing login
  async function login() {
    setLoading(true)
    try {
      await auth.login(email, password);
      router.replace("/(tabs)")
    } catch(err) {
      alert(`Email or password is incorrect`);
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.atlasLogo} source={require("../assets/images/logo.png")}></Image>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="white"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Pressable onPress={login} style={styles.signInButton}>
      {/* <Pressable onPress={() => { router.replace("/(tabs)/"); }} style={styles.signInButton}> */}
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <Pressable onPress={() => router.replace("/register")} style={styles.newAccountButton} replace>
        <Text style={styles.buttonText}>Create a new account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00003C',
  },
  atlasLogo: {
    resizeMode: 'contain',
    width: 250,
    height: 200,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -15,
    marginBottom: 15
  },
  inputField: {
    width: 400,
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1DD2AF',
    color: 'white',
  },
  signInButton: {
    backgroundColor: '#1DD2AF',
    width: 400,
    height: 40,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center',
  },
  newAccountButton: {
    borderWidth: 2,
    borderRadius: 5,
    width: 400,
    height: 40,
    marginTop: 15,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newAccountText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  }
})