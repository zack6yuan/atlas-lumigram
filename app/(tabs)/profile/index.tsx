import { Text, View, Image, StyleSheet, Pressable } from "react-native";
const profilePicture = require("../../../assets/images/profilePicture.png");
import { FlashList } from '@shopify/flash-list';
import { homeFeed } from "../../../placeholder";
import { useRouter } from "expo-router";
import { useState } from 'react';

export default function Page() {
  const [username, setUsername] = useState('Guest')
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
        data={homeFeed}
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
