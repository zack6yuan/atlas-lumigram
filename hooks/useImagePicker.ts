import { useState } from 'react';
import { usePermissions } from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export function useImagePicker() {
  const [image, setImage] = useState<string | undefined>(undefined)
  const [status, requestPermission] = usePermissions();

  async function openImagePicker(){
    if (status === null) {
      const permission = await requestPermission();
      if (permission.granted === false) {
        alert('You need to grant permissions to access your camera roll');
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  function reset() {
    alert("Reset Clicked")
  }

  return {image, openImagePicker, reset}
}