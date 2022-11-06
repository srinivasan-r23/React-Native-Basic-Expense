import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "./constants/styles";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./UI/IconButton";
import ExpenseContextProvider from "./store/expenses-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExponsesOverview() {
    return (
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              onPress={() => navigation.navigate("ManageExpense")}
              icon="add"
              size={24}
              color={tintColor}
            />
          ),
        })}
      >
        <BottomTabs.Screen
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarActiveTintColor: "#E7E5DF",
            tabBarInactiveTintColor: "#B9B7A7",
            tabBarIcon: ({ size, focused }) => (
              <Ionicons
                name={`${focused ? "hourglass-outline" : "hourglass"}`}
                color={`${focused ? "#E7E5DF" : "#B9B7A7"}`}
                size={size}
              />
            ),
          }}
          name="RecentExpenses"
          component={RecentExpenses}
        />
        <BottomTabs.Screen
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarActiveTintColor: "#E7E5DF",
            tabBarInactiveTintColor: "#B9B7A7",
            tabBarIcon: ({ size, focused }) => (
              <Ionicons
                name={`${focused ? "calendar-outline" : "calendar"}`}
                color={`${focused ? "#E7E5DF" : "#B9B7A7"}`}
                size={size}
              />
            ),
          }}
          name="AllExpenses"
          component={AllExpenses}
        />
      </BottomTabs.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
                headerTintColor: "white",
              },
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExponsesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              title="Manage Expense"
              name="ManageExpense"
              component={ManageExpense}
              options={{
                headerTintColor: "white",
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
