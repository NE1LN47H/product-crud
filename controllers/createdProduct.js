const createdProduct = async (req, res, next) => {
  try {
    await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    });
    res.redirect('/products?notice=product-created');
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).render('product/form', {
        title: 'Add product',
        product: req.body,
        action: '/products',
        submitLabel: 'Create product',
        error: error.message
      });
    }
    next(error);
  }
}

module.exports = createdProduct;