import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
const profilePicture = require("../assets/images/profilePicture.png");

export default function editProfile() {

  const router = useRouter();

  const reRoute = () => {
    router.push('/(tabs)/profile');
  }

  return (
    <View style={styles.container}>
      <Image
        source={profilePicture}
        style={styles.userImage}
      />
      <TextInput
        placeholder="Enter a new username..."
        placeholderTextColor={'#666666'}
        autoCapitalize='none'
        style={styles.usernameSetter}
      />
      <Pressable onPress={reRoute} style={styles.saveButton}>
        <Text style={styles.saveText}>Save Profile</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 140,
  },
  userImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  usernameSetter: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#00D6AD',
    width: 400,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
  },
  saveButton: {
    backgroundColor: '#00D6AD',
    borderRadius: 10,
    width: 350,
    height: 60,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: {
    color: 'white',
  },
})