
MongoDB Joins
// MongoDB is document-based and doesn't support traditional joins like SQL. Instead, it offers several approaches:
// 1. Embedded Documents (Preferred)
// User document with embedded orders
// {
//     _id: "user123",
//     name: "John Doe",
//     orders: [
//       { order_id: "ord1", date: ISODate("2023-01-01"), total: 100 },
//       { order_id: "ord2", date: ISODate("2023-02-01"), total: 200 }
//     ]
//   }
// 2. Document References with $lookup (Similar to LEFT JOIN)
// $lookup operation
// db.users.aggregate([
//     {
//       $lookup: {
//         from: "orders",
//         localField: "_id",
//         foreignField: "user_id",
//         as: "user_orders"
//       }
//     }
