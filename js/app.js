const SM = {
    key: "smartmove_data",
    getData() {
        const saved = localStorage.getItem(this.key);
        if (saved) return JSON.parse(saved);
        const data = {

        }
    }
}