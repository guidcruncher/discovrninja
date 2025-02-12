module.exports = (Handlebars) => {
  Handlebars.registerHelper("label", function(key, context) {
    if (context.Config.Labels[key]) {
      return new Handlebars.SafeString(context.Config.Labels[key]);
    }
    return new Handlebars.SafeString("");
  });
};
