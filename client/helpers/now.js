module.exports = (Handlebars) => {
  Handlebars.registerHelper("now", function() {
    var dte = new Date();
    var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
    return new Handlebars.SafeString(dteStr);
  });
};
