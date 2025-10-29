import { useAuth } from "@/components/AuthProvider";
import { useImagePicker } from "@/hooks/useImagePicker";
import firestore from "@/lib/firestore";
import storage from "@/lib/storage";
import { router } from "expo-router";
import React from "react";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
const placeHolder = require("../../assets/images/placeholder.png");

export default function addPost() {
  const auth = useAuth();
  const [caption, setCaption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { image, openImagePicker, reset } = useImagePicker();

  // if no image is selected, show the placeholder
  const newSource = image ? { uri: image } : placeHolder;

    const reRoute = () => {
        router.push('/(tabs)/addPost')
    }

  async function save(){
    if (!image) return;
    setLoading(true);
    const name = image?.split("/").pop() as string;
    const {downloadURL, metadata} = await storage.upload(image, name);
    console.log(downloadURL);

    console.log('Caption is:', caption);

    // caption is not being added to the firestore database
    firestore.addPost({
      caption: caption,
      image: downloadURL,
      createdAt: new Date(),
      createdBy: auth.user?.uid!!,
    })

    setLoading(false);
    alert("Post added!")
  }

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
            value={caption}
            onChangeText={setCaption}
          />
          <Pressable
            style={styles.saveImageButton}
            onPress={save}
          >
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
          <Pressable style={styles.reset} onPress={reRoute}>
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
