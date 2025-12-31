const STORAGE_KEY = "clients";

function getClients() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveClients(clients) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}
