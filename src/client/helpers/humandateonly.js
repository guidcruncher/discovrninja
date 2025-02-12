module.exports = (Handlebars) => {
  Handlebars.registerHelper("humandateonly", function(value) {
    var dte = new Date(value);
    var dteStr = dte.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    return new Handlebars.SafeString(dteStr);
  });
};
