const updateProduct = async (req, res, next) => {
  if (!isValidId(req.params.id)) return next();

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }, { new: true, runValidators: true });

    if (!product) return next();
    res.redirect('/products?notice=product-updated');
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).render('product/form', {
        title: 'Edit product',
        product: { ...req.body, _id: req.params.id },
        action: `/products/${req.params.id}`,
        submitLabel: 'Save changes',
        error: error.message
      });
    }
    next(error);
  }
}

module.exports = updateProduct;