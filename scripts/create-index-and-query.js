// Insert order data and create compound index
db.orders.insertMany([
  { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]);

// Query steel beam orders
db.orders.find({ productName: "Steel beam" }, { _id: 0, productName: 1, status: 1 });

// Create compound index
db.orders.createIndex({ productName: 1, status: 1 });

// Show indexes
db.orders.getIndexes();
