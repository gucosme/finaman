import React from "react";
import { Picker } from "react-native";

import styles from  './styles';

const PeriodFilter = ({ value, onValueChange }) => (
  <Picker
    selectedValue={value}
    mode="dropdown"
    style={styles.Picker}
    onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
  >
    <Picker.Item label="7 days" value="week" />
    <Picker.Item label="last month" value="month" />
  </Picker>
);

export default PeriodFilter;
