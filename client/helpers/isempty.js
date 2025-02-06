module.exports = (Handlebars) => {
  Handlebars.registerHelper("isempty", function(field, options) {
    if (field) {
      if (field === "") {
        return options.fn(this);
      }
      return options.inverse(this);
    }

    return options.fn(this);
  });
};
