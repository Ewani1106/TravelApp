const todo = {
  // single: {
  //   id: 0,
  //   taks: "",
  //   complete: false,
  // },
  // resetSingle: function () {
  //   todo.single = {
  //     id: 0,
  //     taks: "",
  //     complete: false,
  //   };
  // },

  inputEle: null,
  listItems: [],
  submitButton: null,
  tableBody: null,

  init: function (inputName, submitButtonId, tableBody) {
    todo.inputEle = document.getElementsByName(inputName)[0];
    todo.submitButton = document.getElementById(submitButtonId);
    todo.tableBody = document.getElementById(tableBody);

    // todo.inputEle.addEventListener("blur", todo.inputHandle);
    // // todo.inputEle.addEventListener('change',todo.inputHandle);
    // todo.submitButton.setAttribute("disabled", "true");
  },

  selectEdit: function () {
    var itemNum = parseInt(this.getAttribute("item"));
    todo.inputEle.setAttribute("item", itemNum);
    todo.inputEle.value = todo.listItems[itemNum];
  },

  selectDel: function () {
    var itemNum = parseInt(this.getAttribute("item"));
    todo.listItems.splice(itemNum, 1);
    this.closest("tr").remove();
    todo.displayItems();
  },
  displayItems: function () {
    if (typeof todo.listItems !== "undefined" && todo.listItems !== null) {
      todo.tableBody.innerHTML = "";
      console.log(todo.listItems);
      for (let index = 0; index < todo.listItems.length; index++) {
        const element = todo.listItems[index];
        todo.tableBody.innerHTML +=
          "<tr><td> " +
          (index + 1) +
          " </td><td>" +
          element +
          "</td>" +
          "<td>" +
          "<span><button class='edit' item=" +
          index +
          " >+</button>" +
          "<button class='del' item=" +
          index +
          ">x</button></span>" +
          "</td></tr>";

        //for div code use para also
        // "<p class='todo-item'><span class='item' item=" +
        // index +
        // ">" +
        // element +
        // "</span><button class='edit' item=" +
        // index +" >+</button>"+
        // "<button class='del' item=" +
        // index +">x</button></p>";
      }
      var editButton = document.getElementsByClassName("edit");
      var deletebutton = document.getElementsByClassName("del");
      for (let index = 0; index < editButton.length; index++) {
        const element = editButton[index];
        element.addEventListener("click", todo.selectEdit);
      }
      for (let index = 0; index < deletebutton.length; index++) {
        const element = deletebutton[index];
        element.addEventListener("click", todo.selectDel);
      }
    }
  },
  addTodoItem: function () {
    if (
      typeof todo.inputEle.value !== "undefined" &&
      todo.inputEle.value !== null &&
      todo.inputEle.value !== ""
    ) {
      if (todo.listItems.indexOf(todo.inputEle.value) == -1) {
        if (todo.inputEle.getAttribute("item")) {
          var itemNum = parseInt(todo.inputEle.getAttribute("item"));
          todo.listItems[itemNum] = todo.inputEle.value;
          todo.inputEle.removeAttribute("item");
        } else {
          todo.listItems.push(todo.inputEle.value);
        }

        todo.inputEle.value = "";
        todo.displayItems();
      } else {
        jsvalidation.customValidation(todo.inputEle, "Already Added!", "error");
      }
    }
  },

  todoReg: function () {
    todo.submitButton.addEventListener("click", todo.addTodoItem);
  }
};

// inputHandle: function (event) {
//   if (todo.inputEle.value !== "") {
//     todo.submitButton.removeAttribute("disabled");
//     todo.submitButton.addEventListener("click", todo.submitHandle);
//     document
//       .querySelectorAll(`[name="${todo.inputEle.getAttribute("name")}"] ~ span`)
//       .forEach((ele) => ele.remove());
//   } else {
//     console.log("error");
//     document
//       .querySelectorAll(`[name="${todo.inputEle.getAttribute("name")}"] ~ span`)
//       .forEach((ele) => ele.remove());
//       todo.inputEle.parentNode.innerHTML += "<span>Input Required</span>";
//     todo.submitButton.setAttribute("disabled", "true");
//   }
// },
// submitHandle: function (event) {
//   event.preventDefault();
// },
