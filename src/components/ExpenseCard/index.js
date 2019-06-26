import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import moment from "moment";

export default function ExpensesCard({ description, date, image, price }) {
  return (
    <View
      style={styles.card}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{moment(date).format('DD/MM/YYYY hh:mm a')}</Text>
      </View>
      <Text style={styles.price}>$ {price}</Text>
    </View>
  );
}
