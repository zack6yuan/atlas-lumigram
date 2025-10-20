import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { homeFeed } from "../../placeholder";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { FlashList } from "@shopify/flash-list";

export default function HomeScreen() {
  const offset = useSharedValue({ x: 0, y: 0 });
  const popupPosition = useSharedValue({ x: 0, y: 0 });
  const popupAlpha = useSharedValue(0);

  const longPressGesture = Gesture.LongPress().onStart((_event) => {
    popupPosition.value = { x: offset.value.x, y: offset.value.y };
    popupAlpha.value = withTiming(1);
  });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={longPressGesture}>
        <FlashList
          data={homeFeed}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.image }} style={styles.feedImage} />
            </View>
          )}
        />
      </GestureDetector>
    </GestureHandlerRootView>
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
