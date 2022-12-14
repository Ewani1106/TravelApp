const jsvalidation = {
  formElement: null,
  focusElement: function () {
    var msgTag = this.previousSibling.previousSibling;
    this.classList.add("warning");
    msgTag.innerHTML = "";
  },
  blankValidator: function () {
    var msgTag = this.previousSibling.previousSibling;
    if (
      this.value === "" ||
      typeof this.value === undefined ||
      this.value === null
    ) {
      this.classList.remove("warning");
      this.classList.remove("success");
      this.classList.add("error");
      msgTag.innerHTML = this.getAttribute("error");
    } else {
      this.classList.remove("error");
      this.classList.remove("warning");
      this.classList.add("success");
      msgTag.innerHTML = this.getAttribute("success");
    }
  },
  customValidation: function (inputEle, msg, className) {
    var msgTag = inputEle.previousSibling.previousSibling;
    if (
      inputEle.value === "" ||
      typeof inputEle.value === undefined ||
      inputEle.value === null
    ) {
      inputEle.classList.remove("warning");
      inputEle.classList.remove("success");
      inputEle.classList.add("error");
      msgTag.innerHTML = msg;
    } else {
      inputEle.classList.remove("warning");
      inputEle.classList.remove("success");
      inputEle.classList.add(className);
      msgTag.innerHTML = msg;
    }
  },
  formCreator: function () {
    for (let index = 0; index < jsvalidation.formElement.length - 1; index++) {
      const element = jsvalidation.formElement[index];
      element.addEventListener("focus", jsvalidation.focusElement);
      element.addEventListener("blur", jsvalidation.blankValidator);
    }
  }
};
