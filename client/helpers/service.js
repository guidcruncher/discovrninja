module.exports = (Handlebars) => {
  Handlebars.registerHelper(
    "service",
    function(obj, services, parent, opacity) {
      var html = "";
      var template = "";
      var p = {
        title: parent.title,
        bgcolor: parent.bgcolor,
        buttonclass: parent.buttonclass,
        background: parent.background,
        opacity: opacity,
      };
      var f = {};
      var serviceUrl = "";
      var type = "container";
      var name = Object.keys(obj)[0];
      var realName = name.toLowerCase();
      var settings = obj[name];
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
            case "clock":
              switch (settings.mode) {
                case "analog":
                  f = Handlebars.partials["widget-clock"];
                  html = f({
                    settings: settings,
                    parent: p,
                  });
                  break;
                case "digital":
                  f = Handlebars.partials["widget-digitalclock"];
                  html = f({
                    settings: settings,
                    parent: p,
                  });
                  break;
              }
              break;
            case "video":
              f = Handlebars.partials["widget-video"];
              html = f({
                settings: settings,
                parent: p,
              });
              break;
            case "news":
              serviceUrl =
                "/api/resources/news?u=" + encodeURIComponent(settings.url);
              settings.serviceUrl = serviceUrl;
              settings.domainUrl = new URL(settings.url).hostname
                .toLowerCase()
                .replace("www.", "");
              f = Handlebars.partials["widget-news"];
              html = f({
                settings: settings,
                parent: p,
              });
              break;
            case "linkcloud":
              f = Handlebars.partials["widget-tagcloud"];
              if (f) {
                html = f({
                  settings: settings,
                  parent: p
                });
              }
              break;
            case "weather":
              serviceUrl =
                "/api/resources/weather?latitude=" +
                settings.latitude +
                "&longitude=" +
                settings.longitude;
              if (settings.days) {
                serviceUrl += "&days=" + settings.days;
              }
              var bstr = Buffer.from(
                JSON.stringify({
                  s: settings,
                  tp: p
                }),
              ).toString("base64");
              html =
                '<div data-settings="' +
                bstr +
                '" class="hbs-template" data-url="' +
                serviceUrl +
                '"  data-template="widget-weather" ></div>';
              settings.serviceUrl = serviceUrl;
              break;
            case "globe":
              f = Handlebars.partials["widget-globe"];
              html = f({
                settings: settings,
                parent: p,
              });
              break;
            default:
              f = Handlebars.partials[template];
              if (f) {
                html = f({
                  settings: settings,
                  parent: p
                });
              }
              break;
          }
          break;
        case "container":
          template = "service".replace(/\//g, "_");
          services.forEach((s) => {
            if (s.containerName.toLowerCase() == realName) {
              f = Handlebars.partials[template];
              html = f({
                service: s,
                parent: p
              });
              return;
            }
          });
          break;
        case "link":
          template = "widget-link";
          var url = "";
          var domainUrl = "";
          name = "";
          var iconCatalog = "";
          var iconSlug = "";
          if (settings) {
            url = settings.url ?? "";
            domainUrl = new URL(url).hostname.toLowerCase().replace("www.", "");
            name = settings.name ?? "";
            iconCatalog = settings.iconCatalog ?? "";
            iconSlug = settings.iconSlug ?? "";
          }
          f = Handlebars.partials[template];
          html = f({
            settings: {
              iconCatalog: iconCatalog,
              iconSlug: iconSlug,
              url: url,
              domainUrl: domainUrl,
              name: name,
            },
            parent: p,
          });
          break;
      }
      return new Handlebars.SafeString(html);
    },
  );
};
