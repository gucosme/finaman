import React, { useState } from "react";
import { View, Text } from "react-native";

import Expenselist from "../../components/ExpensesList";
import ExpensesChart from "../../components/ExpensesChart";
import PeriodFilter from "../../components/PeriodFilter";

import styles from "./styles";

const data = [
  { value: 50, day: 11 },
  { value: 50, day: 12 },
  { value: 60, day: 13 },
  { value: 40, day: 14 },
  { value: 35, day: 15 },
  { value: 50, day: 16 }
];
export default function Dashboard() {
  const [period, setPeriod] = useState("week");

  return (
    <View style={styles.container}>
      <View style={styles.expenseChart}>
        <View>
          <Text style={styles.text}>Your Expenses</Text>
          <Text style={styles.expenseTotal}>$ 3.243,23</Text>
          <Text style={styles.expensePencent}>10%</Text>
        </View>
        <ExpensesChart data={data} keyValue="value" keyLabel="day" />
      </View>
      <View style={styles.expenseDetail}>
        <View style={styles.filter}>
          <Text style={styles.text}>Expenses detail</Text>
          <PeriodFilter
            value={period}
            onValueChange={itemValue => setPeriod(itemValue)}
          />
        </View>
        <Expenselist />
      </View>
    </View>
  );
}
