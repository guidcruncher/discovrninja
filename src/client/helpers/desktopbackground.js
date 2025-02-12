module.exports = (Handlebars) => {
  Handlebars.registerHelper("desktopbackground", function(opt) {
    var html = 'style="';

    if (!opt) {
      return "";
    }

    switch (opt.type) {
      case "image":
        //        html += "background-image: url('" + opt.url + "');";
        var bgfilter = opt.image.filter ?? "";
        if (bgfilter != "") {
          html += "filter: " + bgfilter + ";";
        }
        break;
      case "bgcolor":
        html += "backgroundColor: " + opt.bgcolor + ";";
        break;
      case "filter":
        html += "background-image: " + opt.filter + ";";
        break;
    }

    html += '"';

    return new Handlebars.SafeString(html);
  });
};
