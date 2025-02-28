module.exports = (Handlebars) => {
  Handlebars.registerHelper("isdebug", function(obj) {
    var isdebug= (process.env.DEBUG_UI || process.env.DEBUG_UI == "true") ;

if (isdebug) {
 return new Handlebars.SafeString(
      "<hr/><pre>" + JSON.stringify(obj?obj:{}, null, 2) + "</pre>",
    );
}
  });
};
