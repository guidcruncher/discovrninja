module.exports = (Handlebars) => {
  Handlebars.registerHelper("isnotempty", function(field, options) {
    if (field) {
      if (field === "") {
        return options.inverse(this);
      }
      return options.fn(this);
    }

    return options.inverse(this);
  });
};
