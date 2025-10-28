// Home page with home photo feed
import { Image, RefreshControl, StyleSheet, Text, View } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { runOnJS } from "react-native-reanimated";

import { useEffect, useState } from "react";

import { useAuth } from "@/components/AuthProvider";
import { FlashList } from "@shopify/flash-list";

import { db } from "@/firebaseConfig";
import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

import React from "react";

export default function HomeScreen() {
  const auth = useAuth();
  const [pressed, setPressed] = useState<boolean>(false);

  // Refresh control
  const [refreshing, setRefreshing] = useState(false);

  // State variable for image URL's from Firestore database
  const [firestoreImage, getFirestoreImage] = useState([]);

  // Define the collection that the data will be accessed from
  const getPosts = collection(db, "posts");

  // Sort the images with the newest added at the top
  const imagesCollectionRef = query(
    getPosts,
    where("image", "!=", null),
);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

  useEffect(() => {
    const fetchImage = async () => {
      //  Read the data
      try {
        const data = await getDocs(imagesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        getFirestoreImage(filteredData);
      } catch (err) {
        console.error(`Error fetching images --> ${err}`);
      }
    };
    fetchImage();
  }, []);

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
    alert("Added to your liked album! 🩷");
  };

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      runOnJS(displayAlert)();
    });

  const gestureRace = Gesture.Race(doubleTap, longPress);

  return (
    <FlashList
      data={firestoreImage}
      renderItem={({ item }) => (
        <GestureDetector gesture={gestureRace}>
          <View>
            <Image source={{ uri: item.image }} style={styles.feedImage} />
            {pressed && (
              <View style={styles.overlayContainer}>
                <Text style={styles.overlayText}>
                  Pariatur officia ut dolor commodo. Adipisicing reprehenderit
                  magna dolor non fugiat ea fugiat ea sunt duis nostrud
                  reprehenderit cupidatat magna.
                </Text>
              </View>
            )}
          </View>
        </GestureDetector>
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  feedImage: {
    width: 430,
    height: 430,
    marginLeft: 4,
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
    color: "white",
    fontWeight: "bold",
  },
});
