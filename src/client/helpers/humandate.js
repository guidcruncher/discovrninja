module.exports = (Handlebars) => {
  Handlebars.registerHelper("humandate", function(value) {
    var dte = new Date(value);
    var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
    return new Handlebars.SafeString(dteStr);
  });
};
