import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});
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
function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() * Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense?.id === action.payload?.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action?.payload?.data };
      const updateExpenses = [...state];
      updateExpenses[updatableExpenseIndex] = updateItem;
      return updateExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action?.payload);
    default:
      return state;
  }
}
function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    console.log(id);
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }
  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
