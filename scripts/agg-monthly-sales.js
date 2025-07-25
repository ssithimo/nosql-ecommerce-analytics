db.sales.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
      monthlySales: { $sum: { $multiply: ["$unitPrice", "$quantity"] } }
    }
  },
  { $out: "salesMonthlyAgg" }
]);
