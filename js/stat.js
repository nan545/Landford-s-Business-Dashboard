function updateStats() {
  const clients = getClients();

  totalClients.textContent = clients.length;
  activeClients.textContent =
    clients.filter(c => c.status === "Active").length;

  renderCharts(); // 🔥 update charts automatically
}
