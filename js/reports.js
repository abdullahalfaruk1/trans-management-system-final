shell("Reports", "View transport performance reports", "reports");
const d = SM.getData();
const revenue = d.bookings.reduce((s, x) => s + Number(x.fare || 0), 0);
const expenses = d.expenses.reduce((s, x) => s + Number(x.amount || 0), 0);
const max = Math.max(...d.expenses.map(x => Number(x.amount) || 0), 1);
document.getElementById("pageContent").innerHTML = `
<div class="cards">
<div class="stat-card"><h4>Total Revenue</h4><div class="value">৳${revenue.toLocaleString()}</div></div>
<div class="stat-card"><h4>Total Expenses</h4><div class="value">৳${expenses.toLocaleString()}</div></div>
<div class="stat-card"><h4>Net Balance</h4><div class="value">৳${(revenue - expenses).toLocaleString()}</div></div>

<div class="stat-card"><h4>Bookings</h4><div class="value">${d.bookings.length}</div></div>
</div>
<div class="grid-2">
<div class="panel"><div class="panel-head"><h3>Expense Distribution</h3></div>
<div class="chart">${d.expenses.map(x => `<div class="bar" style="height:${Math.max(10, Number(x.amount) / max * 190)}px" title="${SM.esc(x.description)}"><span>${SM.esc(x.type)}</span></div>`).join("")}</div></div>
<div class="panel"><div class="panel-head"><h3>Fleet Summary</h3></div>
<table class="table"><tbody>
<tr><td>Active</td><td>${d.vehicles.filter(x => x.status === "Active").length}</td></tr>
<tr><td>Maintenance</td><td>${d.vehicles.filter(x => x.status === "Maintenance").length}</td></tr>
<tr><td>Total Drivers</td><td>${d.drivers.length}</td></tr>
<tr><td>Total Routes</td><td>${d.routes.length}</td></tr>
</tbody></table></div>
</div>`;
