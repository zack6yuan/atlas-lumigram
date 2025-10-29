import { db } from "@/firebaseConfig";
import { favoritesFeed } from "@/placeholder";
import { FlashList } from "@shopify/flash-list";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Image, StyleSheet, View, RefreshControl } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { runOnJS } from "react-native-reanimated";

export default function favoritesPage() {
  // Pressed state for gestures
  const [pressed, setPressed] = useState(false);

  // Refresh control
  const [refreshing, setRefreshing] = useState(false);

  // Favorite Images
  const [favoriteImages, getFavoriteImages] = useState([]);

  const getFavorites = collection(db, "favorites");

  const favoritesCollectionRef = query(
    getFavorites,
    where("image", "!=", "null"),
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
        // Read the data
        try {
            const data = await getDocs(favoritesCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            console.log(filteredData);
            getFavoriteImages(filteredData)
        } catch(err) {
            console.error(`Error fetching images --> ${err}`)
        }
    };
    fetchFavorites();
  }, [])

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
    Alert.alert(`Liked`, `Added to your liked album!🩷`);
  };

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      runOnJS(displayAlert)();
    });

  const bothGestures = Gesture.Race(doubleTap, longPress);

  return (
    <FlashList
      data={favoriteImages}
      renderItem={({ item }) => (
        <GestureDetector gesture={bothGestures}>
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
