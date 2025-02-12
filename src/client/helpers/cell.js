module.exports = (Handlebars) => {
  Handlebars.registerHelper("cell", function(value, delimiter, index) {
    if (value) {
      var items = value.split(delimiter);

      if (index > items.length) {
        return "";
      }
      return new Handlebars.SafeString(
        items[index]
      );
    }

    return "";
  });
};
