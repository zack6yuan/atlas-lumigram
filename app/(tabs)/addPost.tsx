import { useImagePicker } from "@/hooks/useImagePicker";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
const placeHolder = require("../../assets/images/placeholder.png");

export default function addPost() {
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const { image, openImagePicker, reset } = useImagePicker();

  // if no image is selected, show the placeholder
  const newSource = image ? { uri: image } : placeHolder;

  return (
    <View style={styles.container}>
      <Image source={newSource} style={styles.placeholder} />
      {/* Case: No image is currently selected */}
      {!image && (
        <Pressable style={styles.saveButton} onPress={openImagePicker}>
          <Text style={styles.saveText}>Choose a photo</Text>
        </Pressable>
      )}
      {/* Case: Image is currently selected */}
      {image && (
        <View>
          <TextInput
            placeholder="Add a caption"
            placeholderTextColor={"#666666"}
            style={styles.imageCaption}
          />
          <Pressable style={styles.saveImageButton}>
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
          <Pressable style={styles.reset} onPress={reset}>
            <Text>Reset</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
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
    borderColor: "#00D6AD",
    width: 400,
    height: 50,
    marginTop: 30,
    paddingLeft: 20,
  },
  saveButton: {
    backgroundColor: "#00D6AD",
    borderRadius: 10,
    width: 365,
    height: 60,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  saveImageButton: {
    backgroundColor: "#00D6AD",
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 17,
    width: 365,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveText: {
    color: "white",
  },
  reset: {
    alignItems: 'center',
    marginTop: 40,
  }
});
