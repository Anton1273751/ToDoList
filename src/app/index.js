const crossNode = document.querySelectorAll(".list__cross");
const allCheckBoxNode = document.querySelectorAll(".list__checkbox");
const btnAddNode = document.querySelector(".form__btn");
const containerNode = document.querySelector(".container");
const delAllNode = document.querySelector(".click__delete-everything");
const listsNode = document.querySelector(".lists");
const listNode = document.querySelector(".list");
const listAllNode = document.querySelectorAll(".list");
const btnRemoveNode = document.querySelector(".click");

// console.log(crossNode.length);
// console.log(listNode);
// console.log(allCheckBoxNode);

crossNode.forEach((elem) => {
  //Получилось
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    elem.closest(".list").remove();
  });
});

btnAddNode.addEventListener("click", (e) => {
  e.preventDefault();
  // listsNode.classList.add("active");
});

delAllNode.addEventListener("click", (e) => {
  listsNode.remove("active");
  btnRemoveNode.remove("active");
});
