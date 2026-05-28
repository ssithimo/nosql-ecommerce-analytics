# 📊 NoSQL E-Commerce Analytics — MongoDB Atlas

> *A hands-on demonstration of MongoDB Atlas for e-commerce data modeling, aggregation, and query optimization.*

---

## 🧠 What This Project Demonstrates
- NoSQL schema design using embedded documents for one-to-many relationships
- Aggregation pipelines for sales metrics and customer behavior analysis
- Compound indexing strategy for query performance optimization
- Behavioral querying on nested arrays using $unwind, $group, $match, and $project

---

## 🧩 Scenario
A mid-size online retailer needs a lightweight, scalable data infrastructure to track monthly sales trends, analyze customer order patterns, and identify first-time buyer behavior. This project simulates that environment using MongoDB Atlas and shows how NoSQL document modeling supports flexible, real-time business queries without the rigidity of a relational schema.

---

## 🗃️ Schema Design

**Sales Transactions Collection**
Each document stores a transaction with ISODate timestamps and Decimal128 fields for precise monetary values. This avoids the floating point precision issues that come up with financial data when using standard number types.

**Customer Orders Collection**
Orders are embedded directly within customer profile documents rather than stored in a separate collection. This is a deliberate design choice. Embedding optimizes read performance for customer-level queries by returning a complete order history in a single document lookup, no joins needed. The tradeoff is reduced write flexibility, which is acceptable here since reads far outnumber writes in a customer analytics context.

---

## 📈 Aggregation Pipelines

**Monthly Sales Totals**
Uses $group, $sum, $multiply, and $dateToString to compute revenue by month from raw transaction records. Output is persisted to a reporting collection using $out so downstream dashboards can query pre-computed results without re-running the full pipeline on every request.

**Customer Behavior Analysis**
Uses $unwind to flatten embedded order arrays, $group to aggregate order counts per customer, and $project to reshape output for reporting. Identifies first-time buyers and customers with no orders using $match and $expr.

---

## ⚡ Indexing Strategy

Compound indexes were created on (productName, status) because those are the two fields most frequently used together in query filters. Index size and structure were verified using getIndexes() and system metadata to confirm creation and monitor overhead.

These two fields cover the most common query patterns in the dataset. Product name and status appear together in catalog lookups and order management workflows, so indexing them together avoids full collection scans on the queries that run most often.

---

## 💡 What the Queries Revealed
- December 2018 was the highest revenue month, consistent with typical holiday demand patterns in retail
- A significant portion of customers placed only one order, pointing to a retention gap that follow-up campaigns could address
- First-time purchases clustered closely in time, suggesting a conversion window where a follow-up offer within two weeks could improve repeat purchase rates

---

## 🚀 How to Run

1. Clone the repo

git clone https://github.com/ssithimo/nosql-ecommerce-analytics.git
cd nosql-ecommerce-analytics

2. Connect to MongoDB Atlas or a local instance using mongosh

3. Run scripts in order:

`mongosh "your_connection_string" insert-sales-data.js`

`mongosh "your_connection_string" agg-monthly-sales.js`

`mongosh "your_connection_string" create-index-and-query.js`

`mongosh "your_connection_string" new-cust-orders.js`

`mongosh "your_connection_string" query-new-cust-orders.js`

---

## 📁 Files
- `scripts/insert-sales-data.js` — Data ingestion
- `scripts/agg-monthly-sales.js` — Monthly revenue aggregation
- `scripts/create-index-and-query.js` — Index creation and 
  performance queries
- `scripts/new-cust-orders.js` — Customer order embedding
- `scripts/query-new-cust-orders.js` — Behavioral queries

---

## 🔧 Tools
MongoDB Atlas, Mongo Shell (mongosh), Aggregation Pipeline, 
Compound Indexing, Embedded Document Schema Design
