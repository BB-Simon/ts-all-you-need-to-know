const messageElement = document.querySelector<HTMLParagraphElement>("#message");

const buttonElement = document.querySelector<HTMLButtonElement>("#btn");

let count: number = 0;

if (buttonElement && messageElement) {
  buttonElement.addEventListener("click", () => {
    count += 2;

    messageElement.textContent = `You clicked ${count} times`;
  });
}
