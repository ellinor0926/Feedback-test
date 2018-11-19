const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// CORS Error Handling
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, X-API-KEY, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routes
const createUserRoute = require('./routes/createUser');
app.use('/api/create-user', createUserRoute);

const getUsersRoute = require('./routes/getUsers');
app.use('/api/get-users', getUsersRoute);

const getUserByIdRoute = require('./routes/getUser');
app.use('/api/get-user', getUserByIdRoute);

const createProductRoute = require('./routes/createProduct');
app.use('/api/create-product', createProductRoute);

const getProductsRoute = require('./routes/getProducts');
app.use('/api/get-products', getProductsRoute);

const sendFeedbackRoute = require('./routes/sendFeedback');
app.use('/api/send-feedback', sendFeedbackRoute);

const getFeedbackRoute = require('./routes/getFeedback');
app.use('/api/get-feedback', getFeedbackRoute);

const getFilteredFeedbackRoute = require('./routes/getFilteredFeedback');
app.use('/api/filter-feedback', getFilteredFeedbackRoute);

const getFiltersRoute = require('./routes/getFilters');
app.use('/api/get-filters', getFiltersRoute);

// Export
module.exports = app;