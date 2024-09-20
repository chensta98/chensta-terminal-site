export function displayHelp() {
    const history = document.getElementById("history");
    const help = document.createElement("help");
    let helpText = `
    This is the help text
    `;
    help.setAttribute("id", "test");
    help.append(helpText);
    history.insertBefore(help, null);
}