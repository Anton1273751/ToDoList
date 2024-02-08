const btnAddNode = document.querySelector(".form__btn");
const containerNode = document.querySelector(".container");
const wrapNode = document.querySelector(".wrap");
const delAllNode = document.querySelector(".click__delete-everything");
const delCompleted = document.querySelector(".click__delete-completed");
const ulNode = document.querySelector(".lists");
const listNode = document.querySelector(".list");
// const listAllNode = document.querySelectorAll(".list");
const btnRemoveNode = document.querySelector(".click");

let todos = [
  {
    id: "jadsfoisdf2123",
    checkbox: false,
    text: "Сделать удаление каждого элемента",
  },
  {
    id: "ojsdf23j0j",
    checkbox: false,
    text: "Сделать добавление элементов в список",
  },
  {
    id: "isadfois23",
    checkbox: false,
    text: "Сверстать тудушку",
  },
  {
    id: "dspkfs2342jgds",
    checkbox: false,
    text: "Сдать теорию",
  },
];

const toggleIsCopleted = (id) => {
  // Меняет булево нашего чекбокса при изменении
  const task = todos.find((elem) => elem.id === id);
  task.checkbox = !task.checkbox;
  renderTasks(); //Обновляем форму
};
const deleteTask = (id) => {
  //Удаляет один обьект из списка
  todos = todos.filter((el) => el.id !== id);
  renderTasks();
};

const deleteCompleted = () => {
  // Удаллит тот чекбокс который в статусе true
  todos = todos.filter((el) => !el.checkbox);
  renderTasks(); //Обновляем форму
};

const deleteAll = () => {
  //Удалит все
  todos.length = 0; // Обнуляет массив, поэтому нам нечего рендерить.
  renderTasks();
};
const createTask = ({ checkbox, text, id }) => {
  const listItem = document.createElement("li");

  listItem.className = "list";
  listItem.innerHTML = `
              <div class="list__wrap-box">
                <input class="list__checkbox" type="checkbox"/>
                <p class="list__text">${text}</p>
              </div>
              <button class="list__cross">❌</button>

            `;
  const checkNode = listItem.querySelector(".list__checkbox"); //?
  const dellTask = listItem.querySelector(".list__cross"); //?
  checkNode.checked = checkbox;
  checkNode.addEventListener("change", () => toggleIsCopleted(id));
  dellTask.addEventListener("click", () => deleteTask(id));

  return listItem;
};

const renderTasks = () => {
  ulNode.innerHTML = "";
  todos.forEach((elem) => {
    ulNode.append(createTask(elem));
  });
  hiddenButtons();
};
const addTask = () => {
  renderTasks();
};

const hiddenButtons = () => {
  if (todos.length !== 0) {
    delCompleted.style.display = "none";
    delAllNode.style.display = "none";
    btnRemoveNode.style.display = "none";
    ulNode.style.display = "none";
  } else {
    delCompleted.style.display = "flex";
    delAllNode.style.display = "flex";
    btnRemoveNode.style.display = "flex";
    ulNode.style.display = "flex";
  }
};

btnAddNode.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
delCompleted.addEventListener("click", deleteCompleted);
delAllNode.addEventListener("click", deleteAll);

renderTasks();
