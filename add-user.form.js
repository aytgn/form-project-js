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
const myRoleValidationEL = document.querySelector("#myRoleValidation");
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
  employeeAddForm.classList.add("was-validated");
  //check employeeRole selected,
  if (!employeeRoleEL.value) {
    myRoleValidationEL.className = "myRoleInvalid";
    event.preventDefault();
    event.stopPropagation();
  }
  //check form validity
  else if (!employeeAddForm.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    console.log("not valid!");
  }
  //if validated,
  else {
    event.preventDefault();
    event.stopPropagation();
    //create an object with form-control-values
    const employee = {
      no: employeeNoEL.value,
      firstName: firstNameEL.value,
      title: employeeTitleEL.value,
      role: employeeRoleEL.value,
      stations: [station1EL.checked, station2EL.checked, station3EL.checked],
      mail: employeeMailEL.value,
      phone: employeePhoneEL.value,
    };
    //stringify object and save to localStorage
    localStorage.setItem("employeeInfo", JSON.stringify(employee));
    //then clear values
    employeeNoEL.value = "";
    firstNameEL.value = "";
    employeeTitleEL.value = "";
    employeeRoleEL.value = "";
    station1EL.value = "";
    station2EL.value = "";
    station3EL.value = "";
    employeeMailEL.value = "";
    employeePhoneEL.value = "";
    // show success Message!
    //-->create text node in span
    document.querySelector("#myMessage").className =
      "showMessageSuccess text-center";
    document.querySelector("#messageText").innerText =
      "Employee Saved Successfully!";
    //remove validated class
    employeeAddForm.classList.remove("was-validated");
    setTimeout(() => {
      document.querySelector("#myMessage").className = "hideEl";
    }, 1000);
  }
};
const roleHandle = (event) => {
  myRoleValidationEL.className = "myRoleValid";
};
//EVENT LISTENERS
resetBtnEL.addEventListener("click", resetBtnClick);
employeeRoleEL.addEventListener("click", roleHandle);
//test
window.onload = () => {
  //add submit listener to form
  employeeAddForm.addEventListener("submit", submitHandler);
};
