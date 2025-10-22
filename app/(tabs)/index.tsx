import { Image, StyleSheet, Text, View } from "react-native";
import { homeFeed } from "../../placeholder";

import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import {
  runOnJS
} from "react-native-reanimated";

import { FlashList } from "@shopify/flash-list";

export default function HomeScreen() {
  const pressDuration = (duration: number) => {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    )
  }

  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      runOnJS(pressDuration)(e.duration)
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
