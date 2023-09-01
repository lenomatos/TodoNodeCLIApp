const prompt = require("prompt-sync")();
const {
  readTodoJson,
  writeTodoJson,
  checkDisCheck,
  removeTodoByIndex,
  addTodo,
  showTodos,
} = require("./managerTodos");

readTodoJson();
showTodos();

let input = prompt("Enter index for discheck: ");
console.log("You entered:", input);

checkDisCheck(input-1);
showTodos();

input = prompt("Enter task do add: ");
console.log("You entered:", input);

addTodo(input);
showTodos();

input = prompt("Enter index for remove: ");
console.log("You entered:", input);
removeTodoByIndex(input-1);
showTodos();