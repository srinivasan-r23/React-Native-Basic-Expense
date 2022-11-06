import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair of Shoes",
    amount: 699,
    date: new Date("2022-11-01"),
  },
  {
    id: "e2",
    description: "A Pair of Trousers",
    amount: 899,
    date: new Date("2022-10-30"),
  },
  {
    id: "e3",
    description: "A Pair of Bananas",
    amount: 10,
    date: new Date("2022-11-02"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 399,
    date: new Date("2022-10-20"),
  },
  {
    id: "e5",
    description: "Course",
    amount: 429,
    date: new Date("2022-10-25"),
  },
];

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
