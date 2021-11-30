/***************************************SELECT ELEMENTS************************************************/
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
/***************************************CLASSES************************************************/

/***************************************EVENT HANDLERS************************************************/
const resetForm = () => {
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
const resetBtnClick = (event) => {
  resetForm();
};
const submitHandler = (event) => {
  //add validation class *MDB*
  employeeAddForm.classList.add("was-validated");
  //check if employee role selected manually
  if (!employeeRoleEL.value) {
    myRoleValidationEL.className = "myRoleInvalid";
    event.preventDefault();
    event.stopPropagation();
  }
  //check form validity *MDB*
  else if (!employeeAddForm.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  //if validated,
  else {
    event.preventDefault();
    event.stopPropagation();
    //INSTEAD OF SUBMIT, SAVE LOCALLY
    // 1) Create an object with form-control-values
    const employee = {
      no: employeeNoEL.value,
      firstName: firstNameEL.value,
      title: employeeTitleEL.value,
      role: employeeRoleEL.value,
      stations: [station1EL.checked, station2EL.checked, station3EL.checked],
      mail: employeeMailEL.value,
      phone: employeePhoneEL.value,
    };
    // 2) Get local employeeArr
    let employeeArrLS = localStorage.getItem("employeeArr");
    //---->2.1)If no employeeArr, make it an empty array
    if (!employeeArrLS) employeeArrLS = "[]";
    //---->2.2)Convert to JSON
    const employeeArrUI = JSON.parse(employeeArrLS);
    // 3) Push employee to employeeArr
    employeeArrUI.push(employee);
    // 4) Stringify array and save to local storage
    localStorage.setItem("employeeArr", JSON.stringify(employeeArrUI));
    // 5) Clear input values
    resetForm();
    // 6) Show success Message!
    //-----4.1) Add pre-defined class to myMessage div
    document.querySelector("#myMessage").className =
      "showMessageSuccess text-center";
    //-----4.2) Add inner text to messageText element
    document.querySelector("#messageText").innerText =
      "Employee Saved Successfully!";
    //-----4.3) Hide message with hiding element after 1.5sec
    setTimeout(() => {
      document.querySelector("#myMessage").className = "hideEl";
    }, 1500);
    // 7) Remove validation class(bcs we don't want to see any error after success until next submit)
    employeeAddForm.classList.remove("was-validated");
  }
};
const roleHandle = () => {
  //whenever roleClicked, hide invalid message for role
  myRoleValidationEL.className = "myRoleValid";
};

/***************************************EVENT lISTENERS************************************************/
resetBtnEL.addEventListener("click", resetBtnClick);
employeeRoleEL.addEventListener("click", roleHandle);
employeeAddForm.addEventListener("submit", submitHandler);
