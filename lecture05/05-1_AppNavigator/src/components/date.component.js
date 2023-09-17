import moment from "moment";

export const getCurrentDate = () => {
  return moment().format("Do MMM YYYY");
};
