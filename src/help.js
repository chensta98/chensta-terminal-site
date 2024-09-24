import { writeToHistory } from "./writeToHistory";

export function displayHelp() {
    let helpText = `
    Welcome to my site! Here are a list of commands that currently work:
    
    help:       displays the message you are currently seeing

    welcome:    displays the welcome message again

    clear:      clears the screen

    about:      displays information about the author

    `;
    
    writeToHistory(helpText, "help")
}