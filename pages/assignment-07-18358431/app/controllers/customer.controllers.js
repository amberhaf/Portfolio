const Customer = require('../models/customer.model.js');

/*  == USER INTERFACE ADDITIONS == */
// Default message for / (get)
exports.root = (req, res) => {
    Customer.find()
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};

// search for customers, matching string on quote field


exports.searchCustomer = (req, res) => {
    var search = req.params.s;
    console.log("Searching Customer: "+search)
    Customer.find({ customer: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};


// search for customers, matching string on author field
exports.searchModel = (req, res) => {
    var search = req.params.s;
    console.log("Searching Model: "+search)
    Customer.find({ model: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
/*  == USER INTERFACE ADDITIONS == */


// Create a new Customer and save to the database
// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate the request

    // Create a new Customer (using schema)
    const customer = new Customer({
        customer: req.body.customer,	
		model: req.body.model,
		price: req.body.price,	
		manufacturer: req.body.manufacturer
    });

    // Save Customer in the database
    customer.save()
    .then(data => {
        /*  == USER INTERFACE ADDITIONS == */
        // res.redirect('/');
        /*  == USER INTERFACE ADDITIONS == */
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Customer."
        });
    });
};

// Return all Customers in the database
exports.findAll = (req, res) => {
    Customer.find()
    .then(customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};

// Find a single Customer identified by customerId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });            
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
        });
    });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request

    // Find the Customer and update it with the request body
    Customer.findByIdAndUpdate(req.params.customerId, {
        customer: req.body.customer,
		model: req.body.model,        
		price: req.body.price,
		manufacturer: req.body.manufacturer
    }, 
       { new: true })  // "new: true" return updated object
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
        });
    });
};

// Update a Customer identified by the customerId in the request
exports.updateModel = (req, res) => {
    // Validate Request

    // Find the Customer and update it with the request body
    Customer.findByIdAndUpdate(req.params.customerId, {
		customer: req.body.customer,
		model: req.body.model,
		price: req.body.price,
		manufacturer: req.body.manufacturer
    }, 
       { new: true })  // "new: true" return updated object
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
        });
    });
};



// Delete a Customer identified by customerId
exports.delete = (req, res) => {
    console.log("got to here");
    Customer.findByIdAndRemove(req.params.customerId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });
        }
        res.send({message: "Customer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Customer with id " + req.params.customerId
        });
    });
};