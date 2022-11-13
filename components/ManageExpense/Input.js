import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ value, label, style, type, maxLength, ...props }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={props?.autocorrect}
        multiline={props?.multiline}
        placeholder={props?.placeholder}
        keyboardType={type}
        onChangeText={props?.onChangeText}
        maxLength={maxLength}
        style={[styles.input, props?.multiline && styles.inputMultiline]}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    borderColor: GlobalStyles.colors.primary500,
    borderWidth: 1,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
