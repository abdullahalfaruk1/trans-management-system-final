const SM = {
    key: "smartmove_data",
    getData() {
        const saved = localStorage.getItem(this.key);
        if (saved) return JSON.parse(saved);
        const data = {
            vehicles: [
                { id: 1, reg: "DHK-GA-1010", type: "Bus", model: "Hino AK", capacity: 40, fuel: "Diesel", status: "Active" },
                { id: 2, reg: "DHK-TA-2020", type: "Microbus", model: "Toyota Hiace", capacity: 14, fuel: "Diesel", status: "Active" },
                { id: 3, reg: "DHK-GA-3030", type: "Bus", model: "Volvo B9", capacity: 45, fuel: "CNG", status: "Maintenance" }
            ],
            drivers: [
                { id: 1, name: "Rahim Ahmed", phone: "01710000001", license: "DL-1001", experience: 7, status: "Available" },
                { id: 2, name: "Karim Hasan", phone: "01710000002", license: "DL-1002", experience: 5, status: "Busy" },
                { id: 3, name: "Sakib Khan", phone: "01710000003", license: "DL-1003", experience: 9, status: "Available" }
            ],
            passengers: [
                { id: 1, name: "Abdullah", email: "abdullah@example.com", phone: "01810000001", status: "Active" },
                { id: 2, name: "Nusrat Jahan", email: "nusrat@example.com", phone: "01810000002", status: "Active" }
            ],
            routes: [
                { id: 1, name: "Dhaka - Chattogram", start: "Dhaka", destination: "Chattogram", distance: 242, time: 360 },
                { id: 2, name: "Dhaka - Sylhet", start: "Dhaka", destination: "Sylhet", distance: 240, time: 330 }
            ],
            trips: [
                { id: 1, route: "Dhaka - Chattogram", vehicle: "DHK-GA-1010", driver: "Rahim Ahmed", date: "2026-08-22", time: "08:00", status: "Scheduled" },
                { id: 2, route: "Dhaka - Sylhet", vehicle: "DHK-TA-2020", driver: "Karim Hasan", date: "2026-08-22", time: "09:30", status: "Running" }
            ],
            bookings: [
                { id: 1, passenger: "Abdullah", trip: "Dhaka - Chattogram", seat: "A1", fare: 850, status: "Confirmed" },
                { id: 2, passenger: "Nusrat Jahan", trip: "Dhaka - Sylhet", seat: "B2", fare: 800, status: "Confirmed" }
            ],
            fuel: [
                { id: 1, vehicle: "DHK-GA-1010", date: "2026-08-20", type: "Diesel", liters: 80, price: 110, total: 8800 }
            ],
            maintenance: [
                { id: 1, vehicle: "DHK-GA-3030", date: "2026-08-21", description: "Engine servicing", cost: 18000, next: "2026-11-21", status: "Completed" }
            ],
            expenses: [
                { id: 1, vehicle: "DHK-GA-1010", type: "Toll", description: "Highway toll", amount: 2500, date: "2026-08-22" },
                { id: 2, vehicle: "DHK-TA-2020", type: "Repair", description: "Brake check", amount: 5000, date: "2026-08-21" }
            ]
        };
        localStorage.setItem(this.key, JSON.stringify(data));
        return data;
    },
    save(data) { localStorage.setItem(this.key, JSON.stringify(data)); },
    nextId(arr) { return arr.length ? Math.max(...arr.map(x => Number(x.id) || 0)) + 1 : 1; },
    esc(v) { return String(v ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m])); },
    badge(status) {
        const s = String(status || "").toLowerCase();
        const cls = s.includes("active") || s.includes("available") || s.includes("confirmed") || s.includes("completed") ? "success" : s.includes("maintenance") || s.includes("busy") || s.includes("scheduled") ? "warning" : s.includes("running") ? "info" : s.includes("cancel") || s.includes("inactive") ? "danger" : "gray";
        return `<span class="badge ${cls}">${this.esc(status)}</span>`;
    },


}