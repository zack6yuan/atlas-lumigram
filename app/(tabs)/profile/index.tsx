import { FlashList } from '@shopify/flash-list';
import { useRouter } from "expo-router";
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { profileFeed } from "../../../placeholder";
const profilePicture = require("../../../assets/images/profilePicture.png");

export default function Page() {
  const [username, setUsername] = useState<string>('Guest')
  const router = useRouter();

  const handlePress = () => {
    router.push('/editProfile')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Image
          source={profilePicture}
          style={styles.userImage}
        />
      </Pressable>
      <Text>@{username}</Text>
      <FlashList
        data={profileFeed}
        numColumns={3}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.image }}
              style={styles.feedImage}
            />
          </View>
        )}
        style={styles.profileFeed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  userImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  profileFeed: {
    flex: 1,
    width: '100%',
    marginTop: 40,
  },
  feedImage: {
    width: '100%',
    height: 150,
  }
})
