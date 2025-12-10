const fs = require('fs');
const filepath = "./tasks.json";

// Load tasks
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// Save tasks
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(filepath, dataJSON);
};

// Add task
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added:", task);
};

// List tasks
const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((t, index) => {
    console.log(`${index + 1} - ${t.task}`);
  });
};

// Remove task
const removeTask = (index) => {
  const tasks = loadTasks();
  if (index < 1 || index > tasks.length) {
    console.log("Invalid task index!");
    return;
  }
  const removed = tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log("Removed task:", removed[0].task);
};

// Read CLI arguments
const command = process.argv[2];
const argument = process.argv[3];


if (command === 'add') {
  addTask(argument);

} else if (command === 'list') {
  listTasks();

} else if (command === 'remove') {
  removeTask(parseInt(argument));

} else {
  console.log("Command not found!");
}
