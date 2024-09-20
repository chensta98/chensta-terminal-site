export function insertWelcome() {
    const history = document.getElementById("history");
    const welcome = document.createElement("pre");
    let welcomeText = `
     _______   ___   ___   _______   __   __   _______   _______   _______
    /  ____// /  /  /  // /  ____// / || / // / _____// /_   __// /  __   //
   /  //     /  /__/  // / //_     /  ||/ // / //___     / //    /  /_/  //
  /  //     /  __    // /  __//   /   |/ // /____  //   / //    /  __   //
 /  //__   /  /  /  // / //___   / /|   //  ____/ //   / //    /  ///  //
/______// /__/  /__// /______// /_//|__// /_____ //   /_//    /__///__//

Welcome to Chensta's blog. Date: ` + Date() + `

Type 'help' for list of commands
`;


    welcome.setAttribute("id", "welcome");
    welcome.append(welcomeText);
    history.insertBefore(welcome, null);
}