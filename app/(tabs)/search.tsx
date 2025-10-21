import { Link } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'start'}}>
      {/* <Text>Search Page</Text>
      <Link href="/profile/1">
        <Text>Profile 1</Text>
      </Link>
      <Link href="/profile/2">
        <Text>Profile 2</Text>
      </Link> */}
      <TextInput style={styles.searchInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 2,
    borderColor: '#00D6AD',
    width: 440,
    height: 60,
  },
});