const sendEmail = async (req, res, next) => {
  if (!isValidId(req.params.id)) return next();

  let transport;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next();

    if (!req.query.email) {
      return res.status(400).send('Recipient email is required.');
    }

  transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8b72b15a5da02f",
    pass: "be23f929b6085b"
  }
});


    const template = await fs.readFile(
      path.join(__dirname, '../views/product/product_email.ejs'),
      'utf8'
    );
    const mailOptions = {
      from: 'Private Person <from@example.com>',
      to: req.query.email,
      subject: `New Product: ${product.name}`,
      html: ejs.render(template, { product })
    };

    const info = await transport.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.redirect('/products?notice=mail-sent');
  } catch (error) {
    next(error);
  } finally {
    if (transport) transport.close();
  }
}

module.exports = sendEmail;