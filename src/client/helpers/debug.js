 module.exports = (Handlebars) => {
  Handlebars.registerHelper("debug", function() {
return new Handlebars.SafeString(
      "<pre>" + JSON.stringify(obj, null, 2) + "</pre>",
    );
  });
};
