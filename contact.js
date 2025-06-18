
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgBox = document.getElementById("formMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    msgBox.style.color = "#ff4b5c";
    msgBox.textContent = "⚠️ Please fill in all fields!";
    return;
  }

  if (!emailRegex.test(email)) {
    msgBox.style.color = "#ff4b5c";
    msgBox.textContent = "⚠️ Enter a valid email address!";
    return;
  }

  msgBox.style.color = "#00ffcc";
  msgBox.textContent = "✅ Message sent successfully!";
  this.reset();
});


function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  const list = document.getElementById("taskList");

  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">🗑</button>`;
  list.appendChild(li);

  input.value = "";
}
