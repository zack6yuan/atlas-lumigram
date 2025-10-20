import { View, Text, Button, StyleSheet, Image, TextInput, Pressable } from "react-native";
const placeHolder = require('../../assets/images/placeholder.png')
export default function addPost() {
  return (
    <View style={styles.container}>
      <Image
        source={placeHolder}
        style={styles.placeholder}
      />
      <TextInput
        placeholder="Add a caption"
        placeholderTextColor={'#666666'}
        style={styles.imageCaption}
      />
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveText}>
          Save
        </Text>
      </Pressable>
      <Pressable style={styles.resetButton}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholder: {
    width: 370,
    height: 370,
    marginTop: 30,
    borderRadius: 20,
  },
  imageCaption: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#00D6AD',
    width: 400,
    height: 50,
    marginTop: 30,
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
  resetButton: {
    marginTop: 50,
  }
})