 module.exports = (Handlebars) => {
  Handlebars.registerHelper("debug", function(obj) {
    return new Handlebars.SafeString(
      "<pre>" + JSON.stringify(obj?obj:{}, null, 2) + "</pre>",
    );
  });
};
