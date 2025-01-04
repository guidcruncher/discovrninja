 module.exports = (Handlebars) => {
   Handlebars.registerHelper("toolbaritem", function(obj, settings) {
     var html = "";
     switch (obj) {
       case "discovrninja":
         html = "<a class=\"nav-link\" href=\"/admin/index\">Administration</a>";
         break;
       case "search":
         var f = Handlebars.partials["widget-search"];
         html = f({
           settings: settings,
           parent: {}
         });
         break;
     }
     return new Handlebars.SafeString(html);
   });
 };
