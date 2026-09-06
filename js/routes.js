shell("Routes", "Manage your routes records", "routes");
const data = SM.getData(); let items = data.routes;
const fields = [["name", "Route Name", "text"], ["start", "Start Point", "text"], ["destination", "Destination", "text"], ["distance", "Distance (km)", "number"], ["time", "Estimated Time (minutes)", "number"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search routes..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Route</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Route</th><th>Start</th><th>Destination</th><th>Distance</th><th>Time</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$6" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
 <div class="modal" id="modal"><div class="modal-box"><div class="modal-head"><h3 id="modalTitle">Add</h3><button class="close" onclick="closeForm()">×</button></div>
 <form id="entityForm" class="form-grid"></form></div></div>`;
    document.getElementById("search").addEventListener("input", e => render(e.target.value));
}