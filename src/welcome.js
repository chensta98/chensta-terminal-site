import { writeToHistory } from "./writeToHistory";

export function insertWelcome() {
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


    writeToHistory(welcomeText, "welcome")
}