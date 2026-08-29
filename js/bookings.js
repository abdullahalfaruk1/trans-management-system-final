shell("Bookings", "Manage your bookings records", "bookings");
const data = SM.getData(); let items = data.bookings;
const fields = [["passenger", "Passenger", "text"], ["trip", "Trip", "text"], ["seat", "Seat Number", "text"], ["fare", "Fare", "number"]];