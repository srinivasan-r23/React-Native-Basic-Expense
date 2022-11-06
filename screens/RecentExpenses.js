import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDay } from "../utils/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx?.expenses?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);

    return (expense.date > date7DaysAgo);
  });
  return (
    <>
      <ExpensesOutput periodName={"Last 7 Days"} expenses={recentExpenses} fallbackText={'No expenses reg. for the last 7 Days'}/>
    </>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
