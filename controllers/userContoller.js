
//rendering the form
module.exports.renderForm = (req, res) => {
    try {
      return res.render("userRegistration.ejs");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error.message });
    }
  };
  