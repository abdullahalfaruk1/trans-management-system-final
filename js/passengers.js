shell("Passengers", "Manage your passengers records", "passengers");
const data = SM.getData(); let items = data.passengers;
const fields = [["name", "Name", "text"], ["email", "Email", "email"], ["phone", "Phone", "text"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search passengers..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Passenger</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Name</th><th>Email</th><th>Phone</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$5" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
 <div class="modal" id="modal"><div class="modal-box"><div class="modal-head"><h3 id="modalTitle">Add</h3><button class="close" onclick="closeForm()">×</button></div>
 <form id="entityForm" class="form-grid"></form></div></div>`;
    document.getElementById("search").addEventListener("input", e => render(e.target.value));
}
function row(x) {
    const cells = [];
    const vals = window._rowVals(x);
    return vals.map((v, i) => `<td>${i === vals.length - 1 && "passengers" !== "routes" && "passengers" !== "fuel" && "passengers" !== "maintenance" && "passengers" !== "expenses" ? SM.badge(v) : SM.esc(v)}</td>`).join("");
}
window._rowVals = function (x) {
    return [x.name, x.email, x.phone, x.status];
};