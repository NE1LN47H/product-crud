const addProduct = (req, res) => {
  res.render('product/form', {
    title: 'Add product',
    product: {},
    action: '/products',
    submitLabel: 'Create product',
    error: null
  });
}

module.exports = addProduct;