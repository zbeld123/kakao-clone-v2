const chatContainer = document.querySelector(".chat__container.js");
const incoming = chatContainer.querySelector(".incoming-js");
const sent = chatContainer.querySelector(".sent-js");

const inputContainer = document.querySelector(".input-container");
const input = inputContainer.querySelector("input");

function getInput() {
  inputContainer.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const message = input.value;
  paintMessage(message);
}

function paintMessage(message) {}

function init() {}
