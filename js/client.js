// Make functions globally available
window.renderClients = renderClients;
window.editClient = editClient;
window.deleteClient = deleteClient;

const table = document.getElementById("clientTable");
const form = document.getElementById("clientForm");

function renderClients(filter = "") {
  const clients = getClients().filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  table.innerHTML = "";
  if (clients.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 2rem; color: #666;">
          No clients added yet. Click "Add Client" to get started.
        </td>
      </tr>`;
  } else {
    clients.forEach(c => {
      table.innerHTML += `
        <tr>
          <td>${c.name}</td>
          <td>${c.email}</td>
          <td>${c.status}</td>
          <td>
            <button onclick="editClient('${c.id}')">Edit</button>
            <button onclick="deleteClient('${c.id}')">Delete</button>
          </td>
        </tr>`;
    });
  }

  updateStats();
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const clients = getClients();
  const id = clientId.value || Date.now().toString();

  const client = {
    id,
    name: name.value,
    email: email.value,
    status: status.value
  };

  const index = clients.findIndex(c => c.id === id);
  index > -1 ? clients[index] = client : clients.push(client);

  saveClients(clients);
  closeForm();
  renderClients();
});

function editClient(id) {
  const c = getClients().find(c => c.id === id);
  clientId.value = c.id;
  name.value = c.name;
  email.value = c.email;
  status.value = c.status;
  openForm();
}

function deleteClient(id) {
  saveClients(getClients().filter(c => c.id !== id));
  renderClients();
}
