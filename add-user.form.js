/***************************************CLASSES************************************************/
class Employee {
  constructor(no, name, title, role, sections, mail, phone) {
    this.no = no;
    this.name = name;
    this.title = title;
    this.role = role;
    this.stations = sections;
    this.mail = mail;
    this.phone = phone;
  }
}
class UI {
  //VARIABLES
  static employeeAddForm = document.querySelector("#employeeAddForm");
  static employeeNoEL = document.querySelector("#employeeNo");
  static firstNameEL = document.querySelector("#firstName");
  static employeeTitleEL = document.querySelector("#employeeTitle");
  static employeeRoleEL = document.querySelector("#employeeRole");
  static station1EL = document.querySelector("#station1");
  static station2EL = document.querySelector("#station2");
  static station3EL = document.querySelector("#station3");
  static employeeMailEL = document.querySelector("#employeeMail");
  static employeePhoneEL = document.querySelector("#employeePhone");
  static myRoleValidationEL = document.querySelector("#myRoleValidation");
  static bodyEL = document.querySelector("body");
  static resetBtnEL = document.querySelector("#resetFormBtn");
  static submitBtnEl = document.querySelector("#submitEmployeeForm");
  //METHODS
  static resetForm = () => {
    //make all input values null or shit
    this.employeeNoEL.value = "";
    this.firstNameEL.value = "";
    this.employeeTitleEL.value = "";
    this.employeeRoleEL.value = "";
    this.station1EL.value = "";
    this.station2EL.value = "";
    this.station3EL.value = "";
    this.employeeMailEL.value = "";
    this.employeePhoneEL.value = "";
  };
  static resetBtnClick = () => {
    this.resetForm();
  };
  static submitHandler = (event) => {
    //add validation class *MDB*
    this.employeeAddForm.classList.add("was-validated");
    //check if employee role selected manually
    if (!this.employeeRoleEL.value) {
      this.myRoleValidationEL.className = "myRoleInvalid";
      event.preventDefault();
      event.stopPropagation();
    }
    //check form validity *MDB*
    else if (!this.employeeAddForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    //if validated,
    else {
      event.preventDefault();
      event.stopPropagation();
      //INSTEAD OF SUBMIT, SAVE LOCALLY
      // 1) Create an object with form-control-values
      const employee = new Employee(
        UI.employeeNoEL.value,
        UI.firstNameEL.value,
        UI.employeeTitleEL.value,
        UI.employeeRoleEL.value,
        [UI.station1EL.checked, UI.station2EL.checked, UI.station3EL.checked],
        UI.employeeMailEL.value,
        UI.employeePhoneEL.value
      );
      // 2) Get local employeeArr
      const employeeArrUI = LS.get("employeeArr");
      // 3) Push employee to employeeArr
      employeeArrUI.push(employee);
      // 4) Stringify array and save to local storage
      LS.set("employeeArr", employeeArrUI);
      // 5) Clear input values
      this.resetForm();
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
  static roleHandle = () => {
    //whenever roleClicked, hide invalid message for role
    this.myRoleValidationEL.className = "myRoleValid";
  };
}
class LS {
  static get = (key) => {
    //if no ls,
    if (!localStorage.getItem(key)) {
      //return an empty array
      return [];
    } //else,
    else {
      //parse to json local storage item
      return JSON.parse(localStorage.getItem(key));
    }
  };
  static set = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };
}
/***************************************EVENT lISTENERS************************************************/
UI.resetBtnEL.addEventListener("click", UI.resetBtnClick);
UI.employeeRoleEL.addEventListener("click", UI.roleHandle);
UI.employeeAddForm.addEventListener("submit", UI.submitHandler);
