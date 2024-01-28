const crossNode = document.querySelector(".list__cross");
const containerNode = document.querySelector(".container");
const delAllNode = document.querySelector(".click__delete-everything");
const listsNode = document.querySelector(".lists");
const listNode = document.querySelector(".list");
const btnRemoveNode = document.querySelector(".click");

// const element = document.querySelector('button')

// element.addEventListener('click', function (event) {
//   console.log('Произошло событие', event.type)
// })

delAllNode.addEventListener("click", () => {
  //Удалает все

  listsNode.remove("active");
  btnRemoveNode.remove("active");
});

crossNode.addEventListener("click", (event) => {
  listNode.remove("active");
});
