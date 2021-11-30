//SELECT ELEMENTS
//->form
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
//->body
const bodyEL = document.querySelector("body");
//->buttons
const resetBtnEL = document.querySelector("#resetFormBtn");
const submitBtnEl = document.querySelector("#submitEmployeeForm");
//EVENT HANDLERS
const resetBtnClick = (event) => {
  //make all input values null or shit
  employeeNoEL.value = "";
  firstNameEL.value = "";
  employeeTitleEL.value = "";
  employeeRoleEL.value = "";
  station1EL.value = "";
  station2EL.value = "";
  station3EL.value = "";
  employeeMailEL.value = "";
  employeePhoneEL.value = "";
};
const submitHandler = (event) => {
  //check form validity
  if (!employeeAddForm.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    console.log("not valid!");
  }
  employeeAddForm.classList.add("was-validated");
};
//EVENT LISTENERS
resetBtnEL.addEventListener("click", resetBtnClick);
//test
window.onload = () => {
  //add submit listener to form
  employeeAddForm.addEventListener("submit", submitHandler);
};
