import Moment from "moment";

import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should generate set start date filter object", () => {
  const action = setStartDate(Moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: Moment(0),
  });
});

test("should generate set end date filter object", () => {
  const action = setEndDate(Moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: Moment(0),
  });
});

test("should generate set text filter object with text value", () => {
  const text = "testing";
  const action = setTextFilter(text);
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text });
});

test("should generate set text filter object with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should generate action object for sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should generate action object for sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});
