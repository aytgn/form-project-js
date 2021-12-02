const employeeAddForm = document.querySelector("#employeeAddForm");
const employeeNoEL = document.querySelector("#employeeNo");
const firstNameEL = document.querySelector("#firstName");
const employeeTitleEL = document.querySelector("#employeeTitle");
const employeeRoleEL = document.querySelector("#employeeRole");
const station1EL = document.querySelector("#station1");
const station2EL = document.querySelector("#station2");
const station3EL = document.querySelector("#station3");
const employeeMailEL = document.querySelector("#employeeMail");
const employeePhoneEL = document.querySelector("#employeePhone");
const myRoleValidationEL = document.querySelector("#myRoleValidation");
const bodyEL = document.querySelector("body");
const resetBtnEL = document.querySelector("#resetFormBtn");
const submitBtnEl = document.querySelector("#submitEmployeeForm");
const showMessage = document.querySelector("#myMessage");
const showMessageText = document.querySelector("#messageText");
const addRow = document.querySelector("#refreshTableBtn");
const tbody = document.querySelector("tbody");
const filterByNameInput = document.querySelector("#filterByNameInput");
const allEmployeeRows = document.getElementsByClassName("employeeRow");

export {
  employeeAddForm,
  employeeNoEL,
  firstNameEL,
  employeeTitleEL,
  employeeRoleEL,
  station1EL,
  station2EL,
  station3EL,
  employeeMailEL,
  employeePhoneEL,
  myRoleValidationEL,
  bodyEL,
  resetBtnEL,
  submitBtnEl,
  showMessage,
  showMessageText,
  addRow,
  tbody,
  filterByNameInput,
  allEmployeeRows,
};
