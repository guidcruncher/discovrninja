// var Handlebars = require("handlebars");

Handlebars.registerHelper("urlencode", function(obj) {
  return new Handlebars.SafeString(
    encodeURIComponent(obj)
  );
});
Handlebars.registerHelper("debug", function(obj) {
  return new Handlebars.SafeString(
    "<pre>" + JSON.stringify(obj, null, 2) + "</pre>",
  );
});
Handlebars.registerHelper("desktopbackground", function(opt) {
  var html = 'style="';

  if (!opt) {
    return "";
  }

  switch (opt.type) {
    case "image":
      html += "background-image: url('" + opt.url + "');";
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
Handlebars.registerHelper("humandate", function(value) {
  var dte = new Date(value);
  var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
  return new Handlebars.SafeString(dteStr);
});
Handlebars.registerHelper("humandateonly", function(value) {
  var dte = new Date(value);
  var dteStr = dte.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return new Handlebars.SafeString(dteStr);
});
Handlebars.registerHelper("isempty", function(field, options) {
  if (field) {
    if (field === "") {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  return options.fn(this);
});
Handlebars.registerHelper("isnotempty", function(field, options) {
  if (field) {
    if (field === "") {
      return options.inverse(this);
    }
    return options.fn(this);
  }

  return options.inverse(this);
});
Handlebars.registerHelper("label", function(key, context) {
  if (context.Config.Labels[key]) {
    return new Handlebars.SafeString(context.Config.Labels[key]);
  }
  return new Handlebars.SafeString("");
});
Handlebars.registerHelper("map", function(array, iter) {
  if (!Array.isArray(array)) return "";
  var len = array.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    if (typeof iter !== "function") {
      res[i] = array[i][iter];
    } else {
      res[i] = iter(array[i], i, array);
    }
  }
  return res;
});
Handlebars.registerHelper("now", function() {
  var dte = new Date();
  var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
  return new Handlebars.SafeString(dteStr);
});
Handlebars.registerHelper(
  "service",
  function(name, services, parent, opacity, settings) {
    var html = "";
    var template = "";
    var p = parent;
    var type = "container";
    var realName = name.toLowerCase();
    p.opacity = opacity;

    if (name.includes(".")) {
      var arr = name.toLowerCase().split(".");
      type = arr[0].toLowerCase();
      realName = arr[1];
    }

    switch (type) {
      case "widget":
        template = name.toLowerCase().replace(".", "-").replace(/\//g, "_");
        switch (realName) {
          case "weather":
            var serviceUrl =
              "/api/resources/weather?latitude=" +
              settings.latitude +
              "&longitude=" +
              settings.longitude;
            if (settings.days) {
              serviceUrl += "&days=" + settings.days;
            }
            html =
              '<div class="hbs-template" data-url="' +
              serviceUrl +
              '"  data-template="partials/widget-weather"></div>';
            settings.serviceUrl = serviceUrl;
            break;
          default:
            var f = Handlebars.partials[template];
            if (f) {
              html = f({
                settings: settings,
                parent: p,
              });
            }
            break;
        }
        break;
      case "container":
        template = "service".replace(/\//g, "_");
        services.forEach((s) => {
          if (s.containerName.toLowerCase() == realName) {
            var f = Handlebars.partials[template];
            html = f({
              service: s,
              parent: p,
            });
            return;
          }
        });
        break;
      case "link":
        template = "widget-link";
        var url = "";
        name = "";
        var iconCatalog = "";
        var iconSlug = "";
        if (settings) {
          url = settings.url ?? "";
          name = settings.name ?? "";
          iconCatalog = settings.iconCatalog ?? "";
          iconSlug = settings.iconSlug ?? "";
        }
        var tf = Handlebars.partials[template];
        html = tf({
          settings: {
            iconCatalog: iconCatalog,
            iconSlug: iconSlug,
            url: url,
            name: name,
          },
          parent: p,
        });
        break;
    }
    return new Handlebars.SafeString(html);
  },
);
Handlebars.registerHelper("stringify", function(obj) {
  return new Handlebars.SafeString(JSON.stringify(obj, null, 0));
});

// module.exports = Handlebars;
