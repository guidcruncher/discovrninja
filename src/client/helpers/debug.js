module.exports = (Handlebars) => {
  Handlebars.registerHelper("debug", function() {
    return process.env.DEBUG_UI === "true";
  });
};
