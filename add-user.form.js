//SELECT ELEMENTS
//->form
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

//EVENT LISTENERS
resetBtnEL.addEventListener("click", (event) => {
  console.log(event.target.id, "fired");
  //make all input values null or shit
});

//test
window.onload = () => {
  console.log(bodyEL);
  console.log(resetBtnEL);
};
