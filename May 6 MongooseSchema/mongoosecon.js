const mongoose = require("mongoose");
const OrderModel = require('./models/orderModel');
require('./models/productModel');

(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017")
    .then(() => console.log("Database Connected"))
    .catch(() => console.log("Com=nnection Error"));

    const orders = await OrderModel.find({}).populate(['product_ids', 'customer_id'])
    console.log(orders);
})();