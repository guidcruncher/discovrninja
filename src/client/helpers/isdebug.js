module.exports = (Handlebars) => {
  Handlebars.registerHelper("isdebug", function(obj) {
    var isdebug= (process.env.DEBUG_UI || process.env.DEBUG_UI == "true") ;

if (isdebug) {
 return new Handlebars.SafeString(
      "<hr/><pre>" + JSON.stringify(obj?ohj:{}, null, 2) + "</pre>",
    );
}
  });
};
