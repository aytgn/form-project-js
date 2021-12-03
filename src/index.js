//IMPORTS
import "./style.css";
//User Interface Class
//Imports
import UI from "./user-interface-methods";
import {
  employeeAddForm,
  employeeRoleEL,
  resetBtnEL,
  addRow,
  resetFiltersBtn,
} from "./user-interface-elements";
//instances
const ui = new UI();
//Event Listeners
resetBtnEL.addEventListener("click", ui.resetBtnClick);
employeeRoleEL.addEventListener("click", ui.roleHandle);
employeeAddForm.addEventListener("submit", ui.submitHandler);
addRow.addEventListener("click", ui.refreshTable);

console.log(resetFiltersBtn)