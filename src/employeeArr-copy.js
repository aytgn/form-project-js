import LS from "./local-storage";

const ls = new LS();
export default class EmployeeArrCopy {
  //initial state
  employeeArrCopy = ls.get("employeeArr");

  get = () => {
    return this.employeeArrCopy;
  };

  set = (arr) => {
    this.employeeArrCopy = arr;
  };
}
