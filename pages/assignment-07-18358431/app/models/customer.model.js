const mongoose = require('mongoose');

// create a mongoose schema for a customer
const CustomerSchema = mongoose.Schema({
    customer: String,
    model: String,
	price: String,
    manufacturer: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Customer', CustomerSchema);
