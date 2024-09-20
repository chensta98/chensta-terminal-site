import { insertWelcome } from "./welcome.js";
import { clearScreen } from "./clear.js";
import { displayHelp } from "./help.js";

const command = document.getElementById("commandText")

insertWelcome();

command.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        executeCommand(e.target.value);
        e.target.value = "";
    }
})

function executeCommand(command) {

    if (command != "clear") {
        addHistory(command);
    }

    switch (command) {
        case "help":
            displayHelp();
            break;
        case "clear":
            console.log("clear screen...");
            clearScreen();
            break;
        case "ls":
            console.log("listing...");
            break;
        case "about":
            console.log("printing about...");
            break;
        case "welcome":
            insertWelcome();
            break;
        case "":
            break
        default:
            console.log("invalid command");
    }
}

function addHistory(command) {
    const history = document.getElementById("history");
    history.innerHTML += "<p>guest@host:" + command + "</p>";
}
