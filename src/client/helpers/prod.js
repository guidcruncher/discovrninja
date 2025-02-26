module.exports = (Handlebars) => {
  Handlebars.registerHelper("prod", function() {
    return process.env.NODE_ENV === "production";
  });
};
