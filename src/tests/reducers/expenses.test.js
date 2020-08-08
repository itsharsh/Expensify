import moment from "moment";

import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expense", () => {
  const expense = {
    id: "test123",
    description: "Test Expense",
    amount: 1000,
    note: "Test Note",
    createdAt: moment(0),
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense,
  });
  expect(state).toEqual([...expenses, expense]);
});

test("should remove expense by id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id,
  });
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: "-1",
  });
  expect(state).toEqual(expenses);
});

test("should edit expense", () => {
  const amount = 1500;
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  });
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if id not found", () => {
  const amount = 1500;
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  });
  expect(state).toEqual(expenses);
});
