shell("Maintenance", "Manage your maintenance records", "maintenance");
const data = SM.getData(); let items = data.maintenance;
const fields = [["vehicle", "Vehicle", "text"], ["date", "Service Date", "date"], ["description", "Description", "text"], ["cost", "Cost", "number"], ["next", "Next Service Date", "date"]];
function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search maintenance..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Maintenance</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Vehicle</th><th>Date</th><th>Description</th><th>Cost</th><th>Next Service</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$7" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>