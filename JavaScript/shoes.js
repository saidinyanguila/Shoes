class Item {
    constructor(id, name, price, colors) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.colors = colors;
    }
}

const shoes = [
    new Item("00", "Nike Air Force 1 '07", 2199.99, ["Blue", "Black", "White"]),
    new Item("01", "Nike Air Force 1 '07 LV8 - calzado", 2499.99, ["Blue", "Black", "White"]),
    new Item("02", "New Balance 327 - Pink Gum", 1499.99, ["Blue", "Black", "White"]),
    new Item("03", "Adidas Drop Step Low 2.0", 1999.99, ["Blue", "Black", "White"]),
    new Item("05", "Asics Gel-Kayano 14", 2559.99, ["Blue", "Black", "White"]),
    new Item("04", "Puma Rebound V6 Low", 1799.99, ["Blue", "Black", "White"]),
]; 