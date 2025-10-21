import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";

export default function loginPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.atlasLogo} source={require("../assets/images/logo.png")}></Image>
      <Text style={styles.loginText}>Register</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        placeholderTextColor="white"
      />
      <Pressable onPress={() => { router.replace("/(tabs)/"); }} style={styles.signInButton}>
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