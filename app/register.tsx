import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, TextInputChangeEvent, View } from "react-native";

export default function loginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  async function register() {
    // alert(`Creating account with ${email} and ${password}`);
    setLoading(true)
    try {
      await auth.register(email, password);
      router.replace("/(tabs)")
    } catch (err) {
      alert(`Unable to create account...${err}`)
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.atlasLogo} source={require("../assets/images/logo.png")}></Image>
      <Text style={styles.loginText}>Register</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        placeholderTextColor="white"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      <Pressable onPress={() => { register() }} style={styles.signInButton}>
        <Text style={styles.buttonText}>Create account</Text>
      </Pressable>
      <Pressable onPress={() => { router.replace("/login") }} style={styles.newAccountButton} replace>
        <Text style={styles.buttonText}>Login to an existing account</Text>
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
    width: '100%',
  }
})