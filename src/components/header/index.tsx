import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BackIcon } from "../../assets/svg";
import { HeaderProps } from "../../../types";

const Header: React.FC<HeaderProps> = ({ title, onPressLeftButton, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => onPressLeftButton()}
        style={{  }}
      >
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: 20,
  },
  title: {
    top: -10,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center", 
  },
  subTitle: {
    top: -10,
    width: 310,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center", 
  },
});


export default Header;
