//Imports
import Employee from "./employee";
import LS from "./local-storage";
import {
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
  showMessage,
  showMessageText,
  tbody,
  noFilterEL,
  nameFilterEL,
  titleFilterEL,
} from "./user-interface-elements";
//Instances
const ls = new LS();
//CLASS
export default class UI {
  //METHODS
  resetForm = () => {
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
  resetBtnClick = () => {
    this.resetForm();
  };
  submitHandler = (event) => {
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
      //INSTEAD OF SUBMIT, SAVE LOCALLY
      event.preventDefault();
      event.stopPropagation();
      // 1) Create an employee instance with form values
      const employee = new Employee(
        employeeNoEL.value,
        firstNameEL.value,
        employeeTitleEL.value,
        employeeRoleEL.value,
        [station1EL.checked, station2EL.checked, station3EL.checked],
        employeeMailEL.value,
        employeePhoneEL.value
      );
      // 2) Get local employeeArr
      const employeeArrUI = ls.get("employeeArr");
      // 3) Push employee to employeeArr
      employeeArrUI.push(employee);
      // 4) save updated employeeArr at local storage
      ls.set("employeeArr", employeeArrUI);
      // 5) Clear input values
      this.resetForm();
      // 6) Show success Message!
      this.showSuccessMessage("new employee created!");
      // 7) Remove validation class(bcs we don't want to see any error after success until next submit)
      employeeAddForm.classList.remove("was-validated");
    }
  };
  roleHandle = () => {
    //whenever roleClicked, hide invalid message for role
    myRoleValidationEL.className = "myRoleValid";
  };
  showSuccessMessage = (messageText) => {
    //-----4.1) Add pre-defined class to myMessage div
    showMessage.className = "showMessageSuccess text-center";
    //-----4.2) Add inner text to messageText element
    showMessageText.innerText = messageText;
    //-----4.3) Hide message with hiding element after 1.5sec
    setTimeout(() => {
      document.querySelector("#myMessage").className = "hideEl";
    }, 1500);
  };
  updateTable = (event) => {
    //first clear table
    tbody.innerHTML = "";
    //get filtered employees
    const filteredEmployeeArr = this.filteredEmployeeArr;
    console.log("filteredEmployeeArr: ", filteredEmployeeArr);
    //print them each to table
    if (filteredEmployeeArr) {
      filteredEmployeeArr.forEach((employee) => {
        const tr = document.createElement("tr");
        tr.className = "employeeRow";
        tr.innerHTML = `<th scope="row">${employee.no}</th>
        <td>${employee.name}</td>
        <td>${employee.title}</td>
        <td>${employee.role}</td>
        <td>${employee.stations[0]}</td>
        <td>${employee.stations[1]}</td>
        <td>${employee.stations[2]}</td>
        <td>${employee.email}</td>
        <td>${employee.phone}</td>
        <td>
        <button type="button" class="btn btn-danger btn-sm px-4">
          <i class="fas fa-times"></i>
        </button>
      </td>`;
        //add eventListener immediately!
        tr.addEventListener("click", this.removeTargetRow);
        tbody.appendChild(tr);
      });
    }
  };
  filteredArray = () => {
    //bring employee arr
    this.filteredEmployeeArr = ls.get("employeeArr");
    //run all filters!!
    //no. filter
    if (noFilterEL.value !== "") {
      this.filteredEmployeeArr = this.filteredEmployeeArr.filter((employee) => {
        return employee.no
          .toLowerCase()
          .includes(noFilterEL.value.toLowerCase());
      });
    }
    //name filter
    if (nameFilterEL.value !== "") {
      this.filteredEmployeeArr = this.filteredEmployeeArr.filter((employee) => {
        return employee.name
          .toLowerCase()
          .includes(nameFilterEL.value.toLowerCase());
      });
    }
    //title filter
    if (titleFilterEL.value !== "") {
      console.log("fired!")
      this.filteredEmployeeArr = this.filteredEmployeeArr.filter((employee) => {
        return employee.title
          .toLowerCase()
          .includes(titleFilterEL.value.toLowerCase());
      });
    }
    if (
      noFilterEL.value === "" &&
      nameFilterEL.value === "" &&
      titleFilterEL.value === ""
    ) {
      this.filteredEmployeeArr = [];
    }
  };
  refreshTable = (event) => {
    //clear input field
    //updateTable
    this.updateTable(event);
  };
  removeTargetRow = (event) => {
    //fire only if clicked to remove button
    if (event.target.tagName === "BUTTON") {
      //get confirmation result
      const confirmationResult = confirm("Remove employee?");
      //if confirmationResult is true,
      if (confirmationResult) {
        //Remove selected user from local storage
        //--->1)Get local storage array
        const employeeArr = ls.get("employeeArr");
        //--->2)Get selected employee No
        const employeeNoUI =
          event.target.parentNode.parentNode.firstChild.innerHTML;
        //--->3)get index of matched employee
        let employeeToRemove = employeeArr.findIndex((employee) => {
          return employee.no === employeeNoUI;
        });
        //--->4)remove matched employee from arr
        employeeArr.splice(employeeToRemove, 1);
        //override new array to local storage
        ls.set("employeeArr", employeeArr);
        //show success message
        this.showSuccessMessage("employee removed successfully1");
        //Update Table
        this.refreshTable();
      }
    }
  };
}
