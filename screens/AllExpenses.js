import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <>
      <ExpensesOutput
        periodName={"Total"}
        fallbackText={"No Expenses added yet!"}
        expenses={expensesCtx?.expenses}
      />
    </>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
