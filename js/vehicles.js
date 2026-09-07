shell("Vehicles", "Manage your vehicles records", "vehicles");
const data = SM.getData(); let items = data.vehicles;
const fields = [["reg", "Registration Number", "text"], ["type", "Vehicle Type", "text"], ["model", "Model", "text"], ["capacity", "Capacity", "number"], ["fuel", "Fuel Type", "text"]];