import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import colors from "../../constants/colors";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: screenWidth,
    flexDirection: 'row',
    backgroundColor: colors.base,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.secundaryText,
  },
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.base,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  contentTitle: {
    fontSize: 20,
    color: colors.primaryText,
    marginBottom: 12
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  scrollableModal: {
    height: 300
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "#87BBE0",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableModalText1: {
    fontSize: 20,
    color: "white"
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "#A9DCD3",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableModalText2: {
    fontSize: 20,
    color: "white"
  }
});

export default styles;
