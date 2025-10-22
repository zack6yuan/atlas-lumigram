import { FlashList } from "@shopify/flash-list";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { userSearch } from "../../placeholder";
const profilePicture = require("../../assets/images/profilePicture.png");

export default function Search() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a profile..."
        placeholderTextColor={"#AAAAAA"}
      />
      <FlashList
        data={userSearch}
        renderItem={({ item }) => {
          return (
            <View style={styles.userInfo}>
              <Image source={{uri: item.avatar}} style={styles.searchImage} />
              <Text style={styles.userName}>Test User</Text>
            </View>
          );
        }}
        style={styles.flashList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 2,
    borderColor: "#00D6AD",
    width: 440,
    height: 60,
    paddingLeft: 10,
  },
  searchImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
    borderRadius: 50,
  },
  flashList: {
    flex: 1,
    width: '100%',
    marginLeft: 15,
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  userName: {
    marginTop: 6,
    marginLeft: 4,
  }
});
