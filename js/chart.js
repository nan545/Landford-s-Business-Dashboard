let statusChart;
let activeChart;

function renderCharts() {
  const clients = getClients();

  const activeCount = clients.filter(c => c.status === "Active").length;
  const inactiveCount = clients.filter(c => c.status === "Inactive").length;

  /* ===== BAR CHART ===== */
  const statusCtx = document.getElementById("statusChart");

  if (statusChart) statusChart.destroy();

  statusChart = new Chart(statusCtx, {
    type: "bar",
    data: {
      labels: ["Active", "Inactive"],
      datasets: [{
        label: "Clients",
        data: [activeCount, inactiveCount],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  /* ===== PIE CHART ===== */
  const activeCtx = document.getElementById("activeChart");

  if (activeChart) activeChart.destroy();

  activeChart = new Chart(activeCtx, {
    type: "pie",
    data: {
      labels: ["Active", "Inactive"],
      datasets: [{
        data: [activeCount, inactiveCount]
      }]
    },
    options: {
      responsive: true
    }
  });
}
