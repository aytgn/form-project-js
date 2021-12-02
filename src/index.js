//IMPORTS
import "./style.css";
//User Interface Class
import UI from "./user-interface";
import {
  employeeAddForm,
  employeeRoleEL,
  resetBtnEL,
  addRow,
  filterByNameInput,
} from "./user-interface-elements";
/***************************************EVENT lISTENERS************************************************/
const ui = new UI();
resetBtnEL.addEventListener("click", ui.resetBtnClick);
employeeRoleEL.addEventListener("click", ui.roleHandle);
employeeAddForm.addEventListener("submit", ui.submitHandler);
addRow.addEventListener("click", ui.refreshTable);
filterByNameInput.addEventListener("keyup", ui.updateTable);
