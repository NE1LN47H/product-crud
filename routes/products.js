const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs').promises;
const nodemailer = require('nodemailer');
const Product = require('../models/Product');
const retrieveProduct = require('../controllers/retrieveProduct');
const addProduct = require('../controllers/addProduct');
const createdProduct = require('../controllers/createdProduct');
const editProduct = require('../controllers/editProduct');
const updateProduct = require('../controllers/updateProduct');
const deleteProduct = require('../controllers/deleteProduct');
const sendEmail = require('../controllers/sendEmail');

const router = express.Router();

function isValidId(id) {
  return Product.db.base.isValidObjectId(id);
}

router.get('/', retrieveProduct);

router.get('/new', addProduct);

router.post('/', createdProduct);

router.get('/:id/edit', editProduct);

router.post('/:id', updateProduct);

router.post('/:id/delete', deleteProduct);

router.get('/send_product_email/:id', sendEmail);

module.exports = router;