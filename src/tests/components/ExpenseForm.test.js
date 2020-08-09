import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm component correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm component correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const name = "description";
  const value = "New Description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { name, value } });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on input change", () => {
  const name = "note";
  const value = "New Note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { name, value } });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount on input change", () => {
  const name = "amount";
  const value = "1000.10";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { name, value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount on input change", () => {
  const name = "amount";
  const value = "1000.123";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { name, value } });
  expect(wrapper.state("amount")).toBe("");
});
