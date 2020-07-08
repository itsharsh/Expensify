import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "amount") {
      if (!value || value.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState(() => ({ [name]: value }));
      }
    } else {
      this.setState(() => ({ [name]: value }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount.",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChange}
            autoFocus
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={(createdAt) => {
              if (createdAt) {
                this.setState(() => ({ createdAt }));
              }
            }}
            focused={this.state.calendarFocused}
            onFocusChange={({ focused }) => {
              this.setState(() => ({ calendarFocused: focused }));
            }}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name="note"
            placeholder="Add a note (Optional)"
            value={this.state.note}
            onChange={this.onChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
