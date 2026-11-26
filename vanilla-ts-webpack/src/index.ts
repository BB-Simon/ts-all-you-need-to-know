import "./styles/style.css";

import { getUsers } from "@/service/user.service";
import { formatName } from "@/utils/helpers";

const messageElement = document.querySelector<HTMLParagraphElement>("#message");

const buttonElement = document.querySelector<HTMLButtonElement>("#btn");

const usersElement = document.querySelector<HTMLUListElement>("#users");

// Display users
const users = getUsers();

if (usersElement) {
  users.forEach((user) => {
    const li = document.createElement("li");

    li.textContent = `${formatName(user.name)} - ${user.email}`;

    usersElement.appendChild(li);
  });
}

// Button functionality
let count: number = 0;

buttonElement?.addEventListener("click", () => {
  count += 5;

  if (messageElement) {
    messageElement.textContent = `Clicked ${count} times`;
  }
});

console.log("Vanilla TypeScript application loaded!");
