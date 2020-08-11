import React from "react";
import { shallow } from "enzyme";

import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={150} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary with multiple expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={10} expensesTotal={1500} />
  );
  expect(wrapper).toMatchSnapshot();
});
