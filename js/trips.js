shell("Trips", "Manage your trips records", "trips");
const data = SM.getData(); let items = data.trips;
const fields = [["route", "Route", "text"], ["vehicle", "Vehicle", "text"], ["driver", "Driver", "text"], ["date", "Trip Date", "date"], ["time", "Departure Time", "time"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search trips..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Trip</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Route</th><th>Vehicle</th><th>Driver</th><th>Date</th><th>Time</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$7" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
 <div class="modal" id="modal"><div class="modal-box"><div class="modal-head"><h3 id="modalTitle">Add</h3><button class="close" onclick="closeForm()">×</button></div>
 <form id="entityForm" class="form-grid"></form></div></div>`;
    document.getElementById("search").addEventListener("input", e => render(e.target.value));
}
function row(x) {
    const cells = [];
    const vals = window._rowVals(x);
    return vals.map((v, i) => `<td>${i === vals.length - 1 && "trips" !== "routes" && "trips" !== "fuel" && "trips" !== "maintenance" && "trips" !== "expenses" ? SM.badge(v) : SM.esc(v)}</td>`).join("");
}
window._rowVals = function (x) {
    return [x.route, x.vehicle, x.driver, x.date, x.time, x.status];
};