shell("Bookings", "Manage your bookings records", "bookings");
const data = SM.getData(); let items = data.bookings;
const fields = [["passenger", "Passenger", "text"], ["trip", "Trip", "text"], ["seat", "Seat Number", "text"], ["fare", "Fare", "number"]];

function render(filter = "") {
    const filtered = items.filter(x => JSON.stringify(x).toLowerCase().includes(filter.toLowerCase()));
    document.getElementById("pageContent").innerHTML = `
 <div class="panel">
  <div class="toolbar"><input class="search" id="search" placeholder="Search bookings..." value="${SM.esc(filter)}"><button class="btn primary" onclick="openForm()">+ Add Booking</button></div>
  <div class="table-wrap"><table class="table"><thead><tr>$<th>Passenger</th><th>Trip</th><th>Seat</th><th>Fare</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>${filtered.length ? filtered.map(x => `<tr>${row(x)}<td class="actions"><button class="btn small secondary" onclick="editItem(${x.id})">Edit</button><button class="btn small danger" onclick="deleteItem(${x.id})">Delete</button></td></tr>`).join("") : `<tr><td colspan="$6" class="empty">No records found.</td></tr>`}</tbody></table></div>
 </div>
