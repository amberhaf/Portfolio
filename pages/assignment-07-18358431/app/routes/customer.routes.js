module.exports = (app) => {
    const customers = require('../controllers/customer.controllers.js');
    
    // Default message for /
    app.get('/', customers.root);

    // Create a new Customer
    app.post('/customers', customers.create);

    // Retrieve all Customers
    app.get('/customers', customers.findAll);

    // Retrieve a single Customer specified by customerId
    app.get('/customers/:customerId', customers.findOne);

    // Update a Customer specified by customerId
    app.put('/customers/:customerId', customers.update);

    // Update a Customer's customer field specified by customerId
    app.put('/customers/model/:customerId', customers.updateModel);

    // Delete a Customer specified by customerId
    app.delete('/customers/:customerId', customers.delete);

    /*  == USER INTERFACE ADDITIONS == */
    // Search for Customers matching s
    app.get('/customer/:s', customers.searchCustomer); 
    app.get('/model/:s', customers.searchModel); 
	 //app.get('/manufacturer/:s', customers.searchModel); 
    /*  == USER INTERFACE ADDITIONS == */

}

/*For this assignment ExpressJS as my RESTful framework.
I used Mongoose modules and node js for manipulating your database.
I used Jquery, bootstrap and fontAwesome as recommended.
I decided to implement the item and order tables. 
This meant that I could embed orders in my items table and only have four fields.
This works because there is no requirement for it to be normalized. */