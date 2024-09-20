import { insertWelcome } from "./welcome.js";
import { clearScreen } from "./clear.js";
import { displayHelp } from "./help.js";
import { displayAbout } from "./about.js";

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
            clearScreen();
            break;
        case "ls":
            // TODO: list directories
            break;
        case "about":
            displayAbout();
            break;
        case "welcome":
            insertWelcome();
            break;
        case "":
            //break out here if no command intered
            break;
        default:
            //error if the command isnt one thats expected
            console.log("invalid command");
    }
}

function addHistory(command) {
    const history = document.getElementById("history");
    history.innerHTML += "<p>guest@host:" + command + "</p>";
}
