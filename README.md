# 📊 NoSQL Sales & Customer Analytics with MongoDB Atlas

> 🗂️ Tools: MongoDB Atlas, Aggregation Pipeline, Mongo Shell

---

## 🧠 Key Concepts Demonstrated

- 📦 NoSQL schema design with embedded documents  
- 📊 Aggregation pipelines for real-time business metrics  
- ⚙️ Indexing strategy for query performance  
- 🔎 Behavioral querying on nested arrays  

---

## 🔍 Project Overview

This project uses **MongoDB Atlas** to model, store, and analyze e-commerce sales and customer order data in a NoSQL environment. It demonstrates data ingestion, aggregation, indexing, and embedded document design to support business intelligence use cases like sales trend reporting and customer behavior analysis.

---

## 🎯 Objective

Simulate and analyze real-world business data using MongoDB by:
- Calculating monthly sales totals from transactional records  
- Modeling customer purchase behavior using embedded documents  
- Optimizing performance with compound indexing  
- Extracting key insights using aggregation pipelines  

---

## 🧩 Business Case

A mid-size online retailer needs a lightweight, scalable data infrastructure to analyze:
- Monthly sales trends
- Customer order patterns
- First-time buyer behavior

The task is to use MongoDB’s flexible document model to simulate the data, transform it using aggregation, and query insights that could support marketing or inventory decisions.

---

## ⚙️ Features & Highlights

### 🗃️ Data Modeling & Ingestion
- Inserted sales transactions with `ISODate` and `Decimal128` fields.
- Embedded orders within customer profiles to model one-to-many relationships.

### 📈 Monthly Sales Aggregation
- Used `$group`, `$sum`, `$multiply`, and `$dateToString` in a pipeline.
- Exported output to a new collection using `$out`.

### ⚡ Query Optimization
- Created compound indexes on high-frequency query fields (`productName`, `status`).
- Verified and reviewed index size using `getIndexes()`.

### 🔍 Customer Insights
- Queried first-time orders using `$unwind`, `$group`, and `$project`.
- Filtered customers with no orders using `$match` and `$expr`.

---

## 📁 Project Structure

---

## ✅ Conclusion & Recommendations
- December 2018 had the highest sales; consider focusing promotions in that season.

- Many customers placed only one order — target them with re-engagement campaigns.

- First-time purchases clustered closely in time — follow-up offers within 2 weeks could drive retention.

- Recommend automating these queries for dashboard reporting and integrating marketing channel data in future analysis.

---

## 🧪 How to Run
1. Clone the repo

2. Connect to MongoDB Atlas or a local instance using mongosh

3. Run scripts:
```bash
mongosh "your_connection_string" insert_sales_data.js
mongosh "your_connection_string" aggregate_monthly_sales.js
.
.
.
```
