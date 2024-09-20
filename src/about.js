import { writeToHistory } from "./writeToHistory";

export function displayAbout() {
    const about = `
    Hello! My name is Ethan Chen. I am a student at Boston University purusing a masters in Computer Science with a concentration
    in Cyber Security. I graduated from Northeastern University in 2022 with a bachelors in Computer Engineering. I am very interested
    in all fields of security, however, I find threat intelligence and hunting my primary interest. In my free time I enjoy tennis, 
    basketball, and gaming. You can find my socials here:

    LinkedIn:       https://www.linkedin.com/in/ethan-chen-167526179/
    Twitter:        https://x.com/ch3nsta
    TryHackMe:      https://tryhackme.com/p/chensta`

    writeToHistory(about, "about")
}