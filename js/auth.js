document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});
