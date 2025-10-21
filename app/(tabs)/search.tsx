import { View, TextInput, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'start'
    }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a profile..."
        placeholderTextColor={'#AAAAAA'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 2,
    borderColor: '#00D6AD',
    width: 440,
    height: 60,
    paddingLeft: 10,
  },
});