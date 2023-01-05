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
  console.log("\nFor Help type help");
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
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.substring(0,5) === "hello") {
    hello(text.replace('\n', '').substring(5).split(" "));
  } else if (text === "help\n") {
    help();
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

//help to user to go into the app
/**
 * Help
 *
 * @returns {void}
 */
function help() {
  console.log("\nEnter hello to print hello! ");
  console.log("\nEnter hello + 'text 'to print hello 'text' ! \n");
  console.log("Enter quit or exit to exit the application\n");
}

// The following line starts the application
startApp("Omar Khankan");
