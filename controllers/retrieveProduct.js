const retrieveProduct = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.render('product/retrieve', {
      title: 'Products',
      products,
      notice: req.query.notice
    });
  } catch (error) {
    next(error);
  }
}

module.exports = retrieveProduct;