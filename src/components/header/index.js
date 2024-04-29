import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BackIcon } from "../../assets/svg";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onPressLeftButton()}
        style={{}}
      >
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: 20,
    // marginTop: isIOS?responsiveWidth (19):0
  },
  title: {
    // ...Typography.Title.L,
    top: -10,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center", //for Android
  },
  subTitle: {
    // ...Typography.Body.M,
    // color: Theme.borderText,
    top: -10,
    width: 310,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center", //for Android
  },
});


export default Header;
