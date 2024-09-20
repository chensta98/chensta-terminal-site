export function writeToHistory(text, attribute) {
    const history = document.getElementById("history");
    const write = document.createElement("pre");
    write.setAttribute("id", "commandOutput");
    write.append(text);
    history.insertBefore(write, null);
}