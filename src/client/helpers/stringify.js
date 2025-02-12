module.exports = (Handlebars) => {
  Handlebars.registerHelper("stringify", function(obj) {
    return new Handlebars.SafeString(JSON.stringify(obj, null, 0));
  });
};
