import { homeFeed } from "@/placeholder";
import { favoritesFeed } from "@/placeholder";
import { FlashList } from "@shopify/flash-list";
import { View, Image, StyleSheet } from "react-native";

import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

import {
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function favoritesPage() {

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
          data={favoritesFeed}
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
