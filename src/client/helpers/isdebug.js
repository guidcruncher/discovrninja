module.exports = (Handlebars) => {
  Handlebars.registerHelper("isdebug", function() {
    return process.env.DEBUG_UI === "true";
  });
};
