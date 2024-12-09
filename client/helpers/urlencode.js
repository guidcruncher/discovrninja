module.exports = (Handlebars) => {
  Handlebars.registerHelper("urlencode", function(obj) {
    return new Handlebars.SafeString(
      encodeURIComponent(obj)
    );
  });
};
