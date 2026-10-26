const editProduct = async (req, res, next) => {
  if (!isValidId(req.params.id)) return next();

  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next();

    res.render('product/form', {
      title: 'Edit product',
      product,
      action: `/products/${product.id}`,
      submitLabel: 'Save changes',
      error: null
    });
  } catch (error) {
    next(error);
  }
}

module.exports = editProduct;