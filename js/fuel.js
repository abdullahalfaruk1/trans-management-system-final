shell("Fuel Records", "Manage your fuel records", "fuel");
const data = SM.getData(); let items = data.fuel;
const fields = [["vehicle", "Vehicle", "text"], ["date", "Fuel Date", "date"], ["type", "Fuel Type", "text"], ["liters", "Liters", "number"], ["price", "Price/Liter", "number"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search fuel..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Fuel Record</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Vehicle</th><th>Date</th><th>Fuel</th><th>Liters</th><th>Price/Liter</th><th>Total</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$7" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
 <div class="modal" id="modal"><div class="modal-box"><div class="modal-head"><h3 id="modalTitle">Add</h3><button class="close" onclick="closeForm()">×</button></div>
 <form id="entityForm" class="form-grid"></form></div></div>`;
    document.getElementById("search").addEventListener("input", e => render(e.target.value));
}
function row(x) {
    const cells = [];
    const vals = window._rowVals(x);
    return vals.map((v, i) => `<td>${i === vals.length - 1 && "fuel" !== "routes" && "fuel" !== "fuel" && "fuel" !== "maintenance" && "fuel" !== "expenses" ? SM.badge(v) : SM.esc(v)}</td>`).join("");
}
window._rowVals = function (x) {
    return [x.vehicle, x.date, x.type, x.liters, x.price, '৳' + Number(x.total).toLocaleString()];
};
function openForm(item = null) {
    const modal = document.getElementById("modal"); modal.classList.add("show");
    document.getElementById("modalTitle").textContent = item ? "Edit" : "Add";
    const form = document.getElementById("entityForm");
    form.innerHTML = fields.map(f => `<label>${f[1]}<input name="${f[0]}" type="${f[2]}" value="${item ? SM.esc(item[f[0]]) : ""}" required></label>`).join("") +
        `<div class="form-actions" style="grid-column:1/-1"><button type="button" class="btn secondary" onclick="closeForm()">Cancel</button><button class="btn primary">Save</button></div>`;
    form.onsubmit = e => {
        e.preventDefault(); const obj = { id: item ? item.id : SM.nextId(items) }; new FormData(form).forEach((v, k) => obj[k] = v);
        if (obj.liters && obj.price) obj.total = Number(obj.liters) * Number(obj.price);
        if (item) items = items.map(x => x.id === item.id ? obj : x); else items.push(obj);
        data.fuel = items; SM.save(data); closeForm(); render(document.getElementById("search")?.value || ""); SM.toast("Saved successfully");
    };
}