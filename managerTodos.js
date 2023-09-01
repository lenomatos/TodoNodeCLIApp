const fs = require("fs");
let todoList = require("./todoList");

function readTodoJson() {
  try {
    const data = fs.readFileSync("todo.json", "utf8");
    todoList = JSON.parse(data);
  } catch (err) {
    // Handle errors, e.g., file not found or invalid JSON
    console.log(`You entered: ${err}`);
  }
}

function writeTodoJson() {
  try {
    fs.writeFileSync("todo.json", JSON.stringify(todoList, null, 2), "utf8");
    console.log("todo.json updated successfully.");
  } catch (err) {
    // Handle errors, e.g., file write error
    console.error(`Error writing to todo.json: ${err}`);
  }
}


function checkDisCheck(index) {
  if (index >= 0 && index < todoList.length) {
    todoList[index].completed = !todoList[index].completed;
    writeTodoJson();
    console.log(`Task "${todoList[index].task}" as updated.`);
  } else {
    console.log("Invalid index.");
  }
}

function addTodo(taskDescription) {
  todoList.push({
    task: taskDescription,
    completed: false,
  });
  writeTodoJson();
}

function removeTodoByIndex(index) {
  if (index >= 0 && index < todoList.length) {
    const removedItem = todoList.splice(index, 1);
    console.log(`Removed task: ${removedItem[0].task}`);
    writeTodoJson();
  } else {
    console.log("Invalid index.");
  }
}

function showTodos() {
  console.log("TODO List:");
  todoList.forEach((item, index) => {
    const status = item.completed ? "✓" : " ";
    console.log(`[${index+1}] [${status}] ${item.task}`);
  });
}


module.exports = {
  readTodoJson,
  writeTodoJson,
  checkDisCheck,
  removeTodoByIndex,
  addTodo,
  showTodos,
};
