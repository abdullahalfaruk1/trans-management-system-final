shell("Expenses", "Manage your expenses records", "expenses");
const data = SM.getData(); let items = data.expenses;
const fields = [["vehicle", "Vehicle", "text"], ["type", "Expense Type", "text"], ["description", "Description", "text"], ["amount", "Amount", "number"], ["date", "Expense Date", "date"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
   <div class="toolbar"><input class="search" id="search" placeholder="Search expenses..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Expense</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Vehicle</th><th>Type</th><th>Description</th><th>Amount</th><th>Date</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$6" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
 <div class="modal" id="modal"><div class="modal-box"><div class="modal-head"><h3 id="modalTitle">Add</h3><button class="close" onclick="closeForm()">×</button></div>
 <form id="entityForm" class="form-grid"></form></div></div>`;
    document.getElementById("search").addEventListener("input", e => render(e.target.value));
}