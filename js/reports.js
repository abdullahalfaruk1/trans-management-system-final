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