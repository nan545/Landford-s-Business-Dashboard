if (!localStorage.getItem("loggedIn")) {
  window.location.href = "index.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

search.addEventListener("input", e => renderClients(e.target.value));

function openForm() {
  modal.classList.remove("hidden");
}

function closeForm() {
  modal.classList.add("hidden");
  form.reset();
}

renderClients();

// Debug: Log initial clients on page load
console.log('Initial clients on page load:', getClients());
