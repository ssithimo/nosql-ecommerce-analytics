// Insert embedded customer orders
db.customers.insertMany([
  {
    customerId: "Biden46@gmail.com",
    customerName: "Joe Biden",
    order: []
  },
  {
    customerId: "Trump45@gmail.com",
    customerName: "Donald Trump",
    order: [{ orderId: 1006, orderDate: new ISODate("2024-04-15") }]
  },
  {
    customerId: "Obama44@gmail.com",
    customerName: "Barack Obama",
    order: [
      { orderId: 1005, orderDate: new ISODate("2024-04-12") },
      { orderId: 1002, orderDate: new ISODate("2024-03-30") }
    ]
  },
  {
    customerId: "Bush43@gmail.com",
    customerName: "George Bush",
    order: [
      { orderId: 1004, orderDate: new ISODate("2024-04-10") },
      { orderId: 1003, orderDate: new ISODate("2024-04-02") },
      { orderId: 1001, orderDate: new ISODate("2024-02-14") }
    ]
  }
]);
