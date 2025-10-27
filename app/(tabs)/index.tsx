import { Image, StyleSheet, Text, View } from "react-native";
import { homeFeed } from "../../placeholder";

import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { runOnJS } from "react-native-reanimated";

import { useEffect, useState } from "react";

import { useAuth } from "@/components/AuthProvider";
import { FlashList } from "@shopify/flash-list";

import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs, snapshotEqual } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { getAdditionalUserInfo } from "firebase/auth";

export default function HomeScreen() {
  const auth = useAuth();
  const [pressed, setPressed] = useState<boolean>(false);

  // Get the images from FireStore
  const [url, setUrl] = useState();

  function getPhotos() {
    
  }

  const longPress = Gesture.LongPress()
    // Beginning of the gesture
    .onStart(() => {
      runOnJS(setPressed)(true);
    })
    // End of the gesture
    .onEnd(() => {
      runOnJS(setPressed)(false);
    });

  const displayAlert = () => {
    alert('Added to your liked album! 🩷')
  }

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      runOnJS(displayAlert)();
  })

  const gestureRace = Gesture.Race(doubleTap, longPress)

  return (
    // <FlashList
    //   data={homeFeed}
    //   renderItem={({  }) => (
    //     <GestureDetector gesture={gestureRace}>
    //       <View>
    //         <Text>Welcome {auth.user?.email}!</Text>
    //         <Image source={{ uri: url }} style={styles.feedImage} />
    //         {pressed && (
    //           <View style={styles.overlayContainer}>
    //             <Text style={styles.overlayText}>
    //               Pariatur officia ut dolor commodo. Adipisicing reprehenderit magna dolor non fugiat ea fugiat ea sunt duis nostrud reprehenderit cupidatat magna.
    //             </Text>
    //           </View>
    //         )}
    //       </View>
    //     </GestureDetector>
    //   )}
    // />
    <Image source={url}>
    </Image>
  );
}

const styles = StyleSheet.create({
  feedImage: {
    width: 435,
    height: 435,
    marginLeft: 2.5,
    marginBottom: 10,
    borderRadius: 20,
  },
  overlayContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayText: {
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
  },
});
