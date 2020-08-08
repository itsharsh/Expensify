import moment from "moment";

export default [
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
