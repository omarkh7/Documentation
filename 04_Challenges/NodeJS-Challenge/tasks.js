/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`\nWelcome to ${name}'s application!`);
  console.log("\nFor Help use the command --help--");
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  console.log("");

  // Quit and Exit
  if (text === "quit\n" || text === "exit\n") {
    quit();

    // Back
  } else if (text === "back\n") {
    help();

    // Hello
  } else if (text.substring(0, 5) === "hello") {
    hello(text.replace("\n", "").substring(5).split(" ").join(" "));

    // Help
  } else if (text === "help\n") {
    help();

    // Remove
  } else if (text === "remove\n") {
    tasks.splice(-1);
    console.log(
      `the last task has been removed,you still have ${tasks.length} tasks; check your list by using --list-- command`
    );
  } else if (text.substring(0, 6) === "remove") {
    Remove(text.replace("\n", "").substring(7));
  }

  // List
  else if (text === "list\n") {
    List();

    // Add
  } else if (text === "add\n") {
    console.log("Error Please add a task");
  } else if (text.substring(0, 3) === "add") {
    Add(text.replace("\n", "").substring(4));
    console.log(
      `task has been added, now you have ${tasks.length} tasks to do; check your list by using --list-- command`
    );

    // Edit
  } else if (text === "edit\n") {
    console.log("Error Please edit a task");
  } else if (text.substring(0, 4) === "edit") {
    let i = text.trim().split(" ");
    if (!isNaN(i[1])) {
      let j = i.splice(2).join(" ");
      Edit(i[1], j);
    } else {
      Edit(tasks.length, text.substring(5));
    }

    //check and uncheck
  } else if (text === "check\n") {
    console.log("Error Please Check a task");
  } else if (text.substring(0, 5) === "check") {
    check(text.trim().substring(5));
  } else if (text.substring(0, 7) === "uncheck") {
    uncheck(text.trim().substring(7));

    //unknown command
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text2) {
  console.log("hello" + text2 + "!\n");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
let tasks = [
  "Prepare my breakfast",
  "Studying Reactjs and node js",
  "going to workout in the gym",
];
/**
 *List
 *
 * @returns {void}
 */
function List() {
  console.log("Your Tasks are: ");
  for (i = 0; i < tasks.length; i++) {
    console.log(i + 1 + "-" + tasksckeck[i] + " " + tasks[i]);
  }
  console.log("\n\nHelp:")
  console.log(
    "\na-You can Add more Tasks by usig the --add-- command + name of the Task"
  );
  console.log(
    "b-You can Remove Tasks by using --remove-- command+ number of the task, or only --remove-- to remove the last task"
  );
  console.log(
    "c-You can Edit Tasks by using --edit-- command + 'number of the task' + updated text (task) or only --edit-- + edited task to edit the last task"
  );
  console.log(
    "d-You can Check/UnCheck Tasks by using --check-- / --uncheck-- commands + 'number of the task'  "
  );

  console.log("e-You can return back by using the --back-- command");
}

//taskcheck

let tasksckeck = [];
for (i = 0; i < tasks.length; i++) {
  tasksckeck[i] = "[]";
}

//checked function
function check(check) {
  if (check > tasks.length) {
    console.log(
      `This task do not exist, check another task in your list from 1 to ${tasks.length}`
    );
  } else {
    tasksckeck[Number(check - 1)] = tasksckeck[Number(check - 1)].replace(
      "[]",
      "[✓ ]"
    );
    console.log(
      `the task is Checked, check your list by using --list-- command`
    );
  }
}

//unchecked function
function uncheck(uncheck) {
  if (uncheck > tasks.length) {
    console.log(
      `This task do not exist, uncheck another task in your list from 1 to ${tasks.length}`
    );
  } else {
    tasksckeck[Number(uncheck - 1)] = tasksckeck[Number(uncheck - 1)].replace(
      "[✓ ]",
      "[]"
    );
    console.log(
      `the task is Unchecked, check your list by using --list-- command`
    );
  }
}

// add function
function Add(addedtext) {
  tasks.push(addedtext);
  tasksckeck.push("[]");
}

// remove function

function Remove(removetask) {
  if (removetask > tasks.length) {
    console.log(
      `This task do not exist, remove another task in your list from 1 to ${tasks.length}`
    );
  } else {
    tasks.splice(removetask - 1, 1);
    console.log(
      `the task has is removed you still have  ${tasks.length} tasks to do, check your list by using --list-- command`
    );
  }
}
// Edit Function
function Edit(value, text) {
  if (value > tasks.length) {
    console.log(
      `This task do not exist, edit another task in your list from 1 to ${tasks.length}`
    );
  } else {
    tasks[value - 1] = text;
    console.log(
      `the task is edited you still have  ${tasks.length} tasks to do, check your list by using --list-- command`
    );
  }
}

//help to user to go into the app
/**
 * Help
 *
 * @returns {void}
 */
function help() {
  console.log("\nUse command --hello-- to print hello!\n");
  console.log("Use command --hello-- + 'text 'to print hello 'text' ! \n");
  console.log("Use command --list-- to show all the tasks and the list documentation \n");
  console.log("Use command --quit-- or --exit-- to exit the application\n");
}

// The following line starts the application
startApp("Omar Khankan");
