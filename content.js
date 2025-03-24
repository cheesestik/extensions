const messages = [
  "Are you still working? 🥱",
  "You should take a break. 😴",
  "404: Your productivity not found. 🤡",
  "Time to panic? 🚨",
  "Your battery is at 1%. Just kidding. 😂"
  "Nobody loves you."
];

function showAnnoyingMessage() {
  const message = messages[Math.floor(Math.random() * messages.length)];

  const div = document.createElement("div");
  div.textContent = message;
  div.style.position = "fixed";
  div.style.top = `${Math.random() * 80 + 10}vh`;
  div.style.left = `${Math.random() * 80 + 10}vw`;
  div.style.backgroundColor = "red";
  div.style.color = "white";
  div.style.fontSize = "18px";
  div.style.padding = "15px";
  div.style.zIndex = "9999";
  div.style.borderRadius = "8px";
  div.style.boxShadow = "0 0 10px black";
  div.style.animation = "shake 0.5s";

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 5000);
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.annoying) {
    showAnnoyingMessage();
  }
});
