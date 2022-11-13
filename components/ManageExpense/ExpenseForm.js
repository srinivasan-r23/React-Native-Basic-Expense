import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../UI/Button";

const ExpenseForm = ({ defaultValues, onCancel, onSubmit, ...props }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues?.amount?.toString() : "",
    date: defaultValues ? defaultValues?.date?.toISOString()?.slice(0, 10) : "",
    description: defaultValues ? defaultValues?.description : "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((inputValues) => {
      return { ...inputValues, [inputIdentifier]: enteredValue };
    });
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues?.amount,
      date: new Date(inputValues?.date),
      description: inputValues?.description,
    };
    const amountIsValid =
      !isNaN(expenseData?.amount) && expenseData?.amount > 0;
    const dateIsValid = expenseData?.date?.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData?.description?.trim()?.length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid Input");
      return;
    }
    onSubmit(expenseData);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.desc}>
          When you know the impact of little expenses, you will realise that
          there is nothing little in this world
        </Text>
        <View style={styles.flexContainer}>
          <Input
            label="Amount"
            type={"decimal-pad"}
            onChangeText={inputChangeHandler.bind(this, "amount")}
            style={styles.rowFlex}
            value={inputValues?.amount}
          />
          <Input
            label="Date"
            maxLength={10}
            placeholder="YYYY-MM-DD"
            onChangeText={inputChangeHandler.bind(this, "date")}
            style={styles.rowFlex}
            value={inputValues?.date}
          />
        </View>
        <Input
          label="Description"
          keyboardType="decimal-pad"
          onChangeText={inputChangeHandler.bind(this, "description")}
          multiline={true}
          autocorrect={false}
          value={inputValues?.description}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {props?.submitBtnLabel}
        </Button>
      </View>
    </ScrollView>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
  },
  rowFlex: {
    flex: 1,
  },
  desc: {
    fontSize: 14,
    color: GlobalStyles.colors.primary500,
    marginBottom: 12,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
