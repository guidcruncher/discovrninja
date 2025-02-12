module.exports = (Handlebars) => {
  Handlebars.registerHelper("minify", function(obj) {
    return new Handlebars.SafeString(
      JSON.stringify(obj),
    );
  });
};
