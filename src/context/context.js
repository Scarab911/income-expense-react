import React, { useReducer, createContext } from 'react';
import ContextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 100,
    type: 'Expense',
    category: 'Travel',
    date: '2022-01-26',
    id: '714f8f56-e466-45bc-aa40-9d0689936a46',
  },
  {
    amount: 50,
    type: 'Income',
    category: 'Business',
    date: '2022-01-20',
    id: '5d15b246-d45a-4861-80c6-aeb9b68735de',
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(ContextReducer, initialState);

  //Action creators
  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
