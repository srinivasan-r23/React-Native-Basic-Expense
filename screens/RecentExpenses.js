import { StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <>
      <ExpensesOutput periodName={'Last 7 Days'}/>
    </>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})