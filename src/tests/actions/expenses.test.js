import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup add expense action object with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expense = {
    description: "Test Expense",
    amount: 1000,
    createdAt: 1000,
    note: "Month - Jan",
  };
  const action = addExpense(expense);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("testid123", { note: "New Note Value" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "testid123",
    updates: { note: "New Note Value" },
  });
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "testid123" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "testid123",
  });
});
