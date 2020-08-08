import moment from "moment";

import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Rent",
    amount: 9000,
    createdAt: moment(0).valueOf(),
    note: "",
  },
  {
    id: "2",
    description: "Fuel",
    amount: 500,
    createdAt: moment(0).subtract(4, "days").valueOf(),
    note: "",
  },
  {
    id: "3",
    description: "Food",
    amount: 1000,
    createdAt: moment(0).add(4, "days").valueOf(),
    note: "",
  },
];

test("should filter by text value", () => {
  const filters = {
    text: "F",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});
