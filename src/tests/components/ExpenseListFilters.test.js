import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { DateRangePicker } from "react-dates";

import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, defaultFilters } from "../fixtures/filters";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters Component correctly with default Filters", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters Component correctly with some Filters", () => {
  wrapper.setProps({
    filters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "Fuel";
  wrapper.find("input").simulate("change", {
    target: {
      value,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  wrapper.setProps({
    filters,
  });
  const value = "date";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(1, "years");
  const endDate = moment(0).add(2, "years");
  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  const calendarFocused = "startDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
