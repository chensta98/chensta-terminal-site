export function clearScreen() {
    const history = document.getElementById("history");

    if(history != null) {
        history.remove();
        const terminal = document.getElementById("terminal");
        const newHistory = document.createElement("div");
        newHistory.setAttribute("id", "history");
        terminal.insertBefore(newHistory, commandLine);
    }
}