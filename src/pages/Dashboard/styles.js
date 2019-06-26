import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  pickerIcon: {
    color: colors.secundaryText,
    position: "absolute",
    bottom: 15,
    right: 10,
    fontSize: 20
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15
  },
  container: {
    backgroundColor: "#33333e",
    color: "#fff",
    flex: 1,
    fontSize: 16,
    flexDirection: "column"
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10
  },
  period: {
    color: "#5dc8ab",
    fontSize: 18,
    fontWeight: "bold"
  },
  expenseDetail: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#363740",
    color: "#dcdcde"
  },
  expenseTotal: {
    fontSize: 25,
    paddingLeft: 10,
    color: colors.primaryText
  },
  expensePencent: {
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.secundaryText
  },
  expenseChart: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 10,
    backgroundColor: "#363740",
    minHeight: 100,
    paddingBottom: 10,
    marginBottom: 10
    //alignItems: 'center',
    //marginHorizontal: 10,
  }
});
