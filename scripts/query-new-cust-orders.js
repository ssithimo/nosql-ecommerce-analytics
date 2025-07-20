// Find all orders for the customer with two orders (Barack Obama)
db.customers.aggregate([
  { $match: { customerId: "Obama44@gmail.com" } },
  { $project: { _id: 0, order: 1 } }
]);

// Find customerId and only the first order (exclude customers with no orders)
db.customers.aggregate([
  { $match: { $expr: { $gt: [{ $size: "$order" }, 0] } } },
  { $unwind: "$order" },
  { $sort: { "order.orderDate": 1 } },
  {
    $group: {
      _id: "$customerId",
      firstOrderId: { $first: "$order.orderId" },
      firstOrderDate: { $first: "$order.orderDate" }
    }
  },
  {
    $project: {
      _id: 0,
      customerId: "$_id",
      firstOrderId: 1,
      firstOrderDate: 1
    }
  }
]);
