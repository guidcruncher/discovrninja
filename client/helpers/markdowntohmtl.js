/* eslint-disable no-undef */

module.exports = (Handlebars) => {
  Handlebars.registerHelper("markdowntohtml", function(md) {
    var converter = new showdown.Converter();

    return new Handlebars.SafeString(
      converter.makehtmHl(md)
    );
  });
};
