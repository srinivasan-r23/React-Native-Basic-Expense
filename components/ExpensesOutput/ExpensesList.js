import { FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      keyExtractor={(item) => item?.id}
      data={expenses}
      renderItem={(itemData) => <ExpenseItem itemData={itemData} />}
    />
  );
};

export default ExpensesList;

