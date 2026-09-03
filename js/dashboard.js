shell("Dashboard", "Overview of your transport operations", "dashboard");
const d = SM.getData();
const revenue = d.bookings.reduce((s, x) => s + Number(x.fare || 0), 0);
const expenses = d.expenses.reduce((s, x) => s + Number(x.amount || 0), 0);
document.getElementById("pageContent").innerHTML = `
<div class="cards">