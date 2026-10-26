const deleteProduct = async (req, res, next) => {
  if (!isValidId(req.params.id)) return next();

  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return next();
    res.redirect('/products?notice=Product%20deleted');
  } catch (error) {
    next(error);
  }
}

module.exports = deleteProduct;