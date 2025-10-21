import { Image, StyleSheet, View } from "react-native";
import { homeFeed } from "../../placeholder";

import {
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

import Animated, {
  runOnJS,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { FlashList } from "@shopify/flash-list";

export default function HomeScreen() {
  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      runOnJS(() => {
        console.log(`Long pressed for ${e.duration} ms!`);
      })();
    }
  });

  return (
    <FlashList
      data={homeFeed}
      renderItem={({ item }) => (
        <GestureDetector gesture={longPressGesture}>
          <View>
            <Image source={{ uri: item.image }} style={styles.feedImage} />
          </View>
        </GestureDetector>
      )}
      estimatedItemSize={50}
    />
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
});
