 function _bool(Handlebars) {

   Handlebars.registerHelper("bool", function(operand_1, operator, operand_2) {
     var operators = {
         'eq': function(l, r) {
           return l == r;
         },
         'noteq': function(l, r) {
           return l != r;
         },
         'gt': function(l, r) {
           return Number(l) > Number(r);
         },
         'gte': function(l, r) {
           return Number(l) >= Number(r);
         },
         'lt': function(l, r) {
           return Number(l) < Number(r);
         },
         'lte': function(l, r) {
           return Number(l) <= Number(r);
         },
         'or': function(l, r) {
           return l || r;
         },
         'and': function(l, r) {
           return l && r;
         },
         '%': function(l, r) {
           return (l % r) === 0;
         },
         'in': function(l, r) {
           return (r.split(',').includes(l));
         },
         'notin': function(l, r) {
           return !(r.split(',').includes(l));
         }
       },
       result = operators[operator](operand_1, operand_2);

     if (result) return new Handlebars.SafeString("true");
     else return new Handlebars.SafeString("false");
   });
 };
 _bool(Handlebars);

 function _buildversion(Handlebars) {

   Handlebars.registerHelper("buildversion", function(field) {
     const buildDate = new Date(0);
     buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE));
     var buildVersion = {
       version: process.env.PACKAGE_VERSION ?? "0.0.0",
       epochBuildate: parseInt(process.env.BUILDDATE) ?? 0,
       buildDate: buildDate,
       buildDateStr: buildDate ? buildDate.toLocaleDateString() + " " + buildDate.toLocaleTimeString() : ""
     };
     var result = "";

     switch (field) {
       case "version":
         result = buildVersion.version + (process.env.IN_DOCKER ? " (Docker)" : "");
         break;
       case "buildDateStr":
         result = buildVersion.buildDateStr;
         break;
     }
     return new Handlebars.SafeString(result);
   });
 };
 _buildversion(Handlebars);

 function _cell(Handlebars) {

   Handlebars.registerHelper("cell", function(value, delimiter, index) {
     if (value) {
       var items = value.split(delimiter);

       if (index > items.length) {
         return "";
       }
       return new Handlebars.SafeString(
         items[index]
       );
     }

     return "";
   });
 };
 _cell(Handlebars);

 function _debug(Handlebars) {

   Handlebars.registerHelper("debug", function(obj) {
     return new Handlebars.SafeString(
       "<pre>" + JSON.stringify(obj, null, 2) + "</pre>",
     );
   });
 };
 _debug(Handlebars);

 function _desktopbackground(Handlebars) {

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
 _desktopbackground(Handlebars);

 /* eslint-disable no-redeclare */

 function _format(Handlebars) {

   Handlebars.registerHelper("format", function(spec, value, options) {
     var opts = {};

     if (typeof options === 'string' || options instanceof String) {
       opts = JSON.parse(options ?? "{}");
     } else {
       opts = options ?? {};
     }
     const padTo2Digits = function(num) {
       return num.toString().padStart(2, '0');
     }

     const formatBytes = function(b, decimals = 2) {
       const bytes = parseInt(b);
       if (isNaN(bytes)) {
         return "";
       }

       if (!+bytes) {
         return '0 Bytes';
       }

       const k = 1024;
       const dm = decimals < 0 ? 0 : decimals;
       const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

       const i = Math.floor(Math.log(bytes) / Math.log(k));


       return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
     };

     const formatDate = function(date) {
       return (
         [
           date.getFullYear(),
           padTo2Digits(date.getMonth() + 1),
           padTo2Digits(date.getDate()),
         ].join('-') +
         ' ' + [
           padTo2Digits(date.getHours()),
           padTo2Digits(date.getMinutes()),
           padTo2Digits(date.getSeconds()),
         ].join(':')
       );
     }

     const getDate = function(v) {
       var value = parseInt(v);
       if (isNaN(value)) {
         return Date.Parse(v);
       }
       return new Date(value);
     }

     switch (spec.toLowerCase()) {
       case "bytes":
         var bytes = Number(value);
         return new Handlebars.SafeString(formatBytes(bytes));
       case "map":
         var arr = Array(value).map((t) => {
           return t[opts.name];
         }).sort();
         return new Handlebars.SafeString(arr.join(opts.delimiter ?? ", "));
       case "list":
         var arr = Array(value).sort();
         return new Handlebars.SafeString(arr.join(opts.delimiter ?? ", "));
       case "datetime":
         var dte = getDate(value);
         var dteStr = dte.toLocaleDateString(opts.locale ?? "en-GB") + " " + dte.toLocaleTimeString(opts.locale ?? "en-GB");
         return new Handlebars.SafeString(dteStr);
       case "date":
         var dte = getDate(value);
         var dteStr = dte.toLocaleDateString(opts.locale ?? "en-GB", {
           weekday: "short",
           day: "numeric",
           month: "short",
         });
         return new Handlebars.SafeString(dteStr);
       case "isodate":
         var dte = new Date(value);
         return new Handlebars.SafeString(formatDate(dte));
       case "iso8601date":
         var dte = new Date(value);
         return new Handlebars.SafeString(dte.toISOString());
       case "currency":
         var s = Number(value).toLocaleString(opts.locale ?? "en-GB", {
           style: 'currency',
           minimumFractionDigits: 2
         });
         return new Handlebars.SafeString(s);
       case "percent":
         var s = Number(value).toLocaleString(opts.locale ?? "en-GB", {
           style: 'percent',
           minimumFractionDigits: 2
         });
         return new Handlebars.SafeString(s);
       case "json":
         return new Handlebars.SafeString(JSON.stringify(value));
     }

     return new Handlebars.SafeString(value);
   });
 };
 _format(Handlebars);

 function _humandate(Handlebars) {

   Handlebars.registerHelper("humandate", function(value) {
     var dte = new Date(value);
     var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
     return new Handlebars.SafeString(dteStr);
   });
 };
 _humandate(Handlebars);

 function _humandateonly(Handlebars) {

   Handlebars.registerHelper("humandateonly", function(value) {
     var dte = new Date(value);
     var dteStr = dte.toLocaleDateString("en-GB", {
       weekday: "short",
       day: "numeric",
       month: "short",
     });
     return new Handlebars.SafeString(dteStr);
   });
 };
 _humandateonly(Handlebars);

 function _isempty(Handlebars) {

   Handlebars.registerHelper("isempty", function(field, options) {
     if (field) {
       if (field === "") {
         return options.fn(this);
       }
       return options.inverse(this);
     }

     return options.fn(this);
   });
 };
 _isempty(Handlebars);

 function _isnotempty(Handlebars) {

   Handlebars.registerHelper("isnotempty", function(field, options) {
     if (field) {
       if (field === "") {
         return options.inverse(this);
       }
       return options.fn(this);
     }

     return options.inverse(this);
   });
 };
 _isnotempty(Handlebars);

 function _label(Handlebars) {

   Handlebars.registerHelper("label", function(key, context) {
     if (context.Config.Labels[key]) {
       return new Handlebars.SafeString(context.Config.Labels[key]);
     }
     return new Handlebars.SafeString("");
   });
 };
 _label(Handlebars);

 function _map(Handlebars) {

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
 };
 _map(Handlebars);

 function _minify(Handlebars) {

   Handlebars.registerHelper("minify", function(obj) {
     return new Handlebars.SafeString(
       JSON.stringify(obj),
     );
   });
 };
 _minify(Handlebars);

 function _now(Handlebars) {

   Handlebars.registerHelper("now", function() {
     var dte = new Date();
     var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
     return new Handlebars.SafeString(dteStr);
   });
 };
 _now(Handlebars);

 function _secondstotime(Handlebars) {

   Handlebars.registerHelper("secondstotime", function(obj, fmnt) {
     var seconds = Math.abs(obj);
     var result = "-";

     if (seconds <= 0) {
       return new Handlebars.SafeString(result);
     }

     var days = Math.floor(seconds / (3600 * 24));
     seconds -= days * 3600 * 24;
     var hrs = Math.floor(seconds / 3600);
     seconds -= hrs * 3600;
     var mnts = Math.floor(seconds / 60);
     seconds -= mnts * 60;

     if (fmnt == "short") {
       result = (days > 0 ? days + " days, " : "") + hrs.toString().padStart(2, "0") + ":" + mnts.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
     } else {
       result = (days > 0 ? days + " days, " : "");
       if (days > 0) {
         result += hrs + " hours,";
       } else {
         result += (hrs > 0 ? hrs + " hours, " : "");
       }

       if ((hrs > 0) || (days > 0)) {
         result += mnts + " minutes, ";
       } else {
         result += (mnts > 0 ? mnts + " minutes, " : "");
       }

       result += seconds + " seconds";
     }

     return new Handlebars.SafeString(
       result
     );
   });
 };
 _secondstotime(Handlebars);

 function _service(Handlebars) {

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

       const extend = ((a, b) => {
         for (var key in b)
           if (b.hasOwnProperty(key))
             a[key] = b[key];
         return a;
       });

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
             case "image":
               f = Handlebars.partials["widget-image"];
               html = f({
                 settings: settings,
                 parent: p,
               });
               break;
             case "audio":
               settings = extend({
                 autoplay: true
               }, settings);
               f = Handlebars.partials["widget-audio"];
               html = f({
                 settings: settings,
                 parent: p,
               });
               break;
             case "video":
               settings = extend({
                 autoplay: true
               }, settings);
               if (settings.dashvideo) {
                 settings.autoplay = true;
               }
               f = Handlebars.partials["widget-video"];
               html = f({
                 settings: settings,
                 parent: p,
               });
               break;
             case "frame":
               f = Handlebars.partials["widget-frame"];
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
 _service(Handlebars);

 function _stringify(Handlebars) {

   Handlebars.registerHelper("stringify", function(obj) {
     return new Handlebars.SafeString(JSON.stringify(obj, null, 0));
   });
 };
 _stringify(Handlebars);

 function _toolbaritem(Handlebars) {

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
 _toolbaritem(Handlebars);

 function _urlencode(Handlebars) {

   Handlebars.registerHelper("urlencode", function(obj) {
     return new Handlebars.SafeString(
       encodeURIComponent(obj)
     );
   });
 };
 _urlencode(Handlebars);

 function _when(Handlebars) {

   Handlebars.registerHelper("when", function(operand_1, operator, operand_2, options) {
     var operators = {
         'eq': function(l, r) {
           return l == r;
         },
         'noteq': function(l, r) {
           return l != r;
         },
         'gt': function(l, r) {
           return Number(l) > Number(r);
         },
         'gte': function(l, r) {
           return Number(l) >= Number(r);
         },
         'lt': function(l, r) {
           return Number(l) < Number(r);
         },
         'lte': function(l, r) {
           return Number(l) <= Number(r);
         },
         'or': function(l, r) {
           return l || r;
         },
         'and': function(l, r) {
           return l && r;
         },
         '%': function(l, r) {
           return (l % r) === 0;
         },
         'in': function(l, r) {
           return (r.split(',').includes(l));
         },
         'notin': function(l, r) {
           return !(r.split(',').includes(l));
         },
         'contains': function(l, r) {
           if (typeof l === "string")
             return l.includes(r);
           else
             return l ? (l[r] ? true : false) : false;
         },
         'notcontains': function(l, r) {
           if (typeof l === "string")
             return !l.includes(r);
           else
             return l ? !(l[r] ? true : false) : false;
         }
       },
       result = operators[operator](operand_1, operand_2);

     if (result) return options.fn(this);
     else return options.inverse(this);
   });
 };
 _when(Handlebars);
