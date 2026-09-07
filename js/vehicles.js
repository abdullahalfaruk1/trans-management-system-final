shell("Vehicles", "Manage your vehicles records", "vehicles");
const data = SM.getData(); let items = data.vehicles;
const fields = [["reg", "Registration Number", "text"], ["type", "Vehicle Type", "text"], ["model", "Model", "text"], ["capacity", "Capacity", "number"], ["fuel", "Fuel Type", "text"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search vehicles..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Vehicle</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Registration</th><th>Type</th><th>Model</th><th>Capacity</th><th>Fuel</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$7" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
 <div class="modal" id="modal"><div class="modal-box"><div class="modal-head"><h3 id="modalTitle">Add</h3><button class="close" onclick="closeForm()">×</button></div>
 <form id="entityForm" class="form-grid"></form></div></div>`;
    document.getElementById("search").addEventListener("input", e => render(e.target.value));
}