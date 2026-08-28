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


        }
    }
}