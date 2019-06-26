import { StyleSheet } from "react-native";

import colors, { darken, lighten, opacity } from "../../constants/colors";

export default StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    borderColor: opacity(colors.secundaryText, 20),
    padding: 8,
    marginBottom: 12,
  },
  description: {
    color: colors.primaryText,
    fontSize: 14,
    fontWeight: 'bold',
  },
  date: {
    color: darken(colors.primaryText, 40),
    fontSize: 16,
    //fontWeight: 'bold',
  },
  price: {
    color: colors.secundaryText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: "#363740",
    color: colors.primaryText,
    flex: 1,
    flexDirection: "column"
  }
});
