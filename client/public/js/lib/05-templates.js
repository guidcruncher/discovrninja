this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["compose"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<div class=\"container\">\n  <div class=\"mb-3\">\n    <label for=\"txtRun\" class=\"form-label\">Run command:</label><br />\n    <textarea style=\"white-space: pre;overflow-wrap: normal;overflow-x: scroll;height:300px;width:700px;overflow:scroll !important; font-family: monospace\" id=\"txtRun\"></textarea><br />\n    <button type=\"button\" class=\"btn btn-primary\" onclick=\"doComposerise('#txtRun', '#txtCompose'); return false;\">Convert to Compose</button>\n    <hr />\n    <label for=\"txtCompose\" class=\"form-label\">Docker compose definition:</label><br />\n    <textarea style=\"display:none;white-space: pre;overflow-wrap: normal;overflow-x: scroll;height:300px;width:700px;overflow:scroll !important; font-family: monospace\" id=\"txtCompose\"></textarea>\n    <div id=\"yamlEdit\" class=\"editor\"></div>\n    <script type=\"text/javascript\">\n      createEditor(\"yamlEdit\", \"txtCompose\");\n\n    </script>\n    <br />\n    <button type=\"button\" class=\"btn btn-primary\" onclick=\"doDeComposerise('#txtCompose', '#txtRun'); return false;\">Convert to run</button>\n    <hr />\n\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["containerinfo"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(((helper = (helper = lookupProperty(helpers, "icon_slug") || (depth0 != null ? lookupProperty(depth0, "icon_slug") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
      "name": "icon_slug",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 10,
          "column": 121
        },
        "end": {
          "line": 10,
          "column": 134
        }
      }
    }) : helper)));
  },
  "3": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
      "name": "Name",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 10,
          "column": 142
        },
        "end": {
          "line": 10,
          "column": 150
        }
      }
    }) : helper)));
  },
  "5": function(container, depth0, helpers, partials, data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "              <tr>\n                <td>Downtime:</td>\n                <td>" +
      container.escapeExpression((lookupProperty(helpers, "secondstotime") || (depth0 && lookupProperty(depth0, "secondstotime")) || container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "downtime") : depth0), "long", {
        "name": "secondstotime",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 26,
            "column": 20
          },
          "end": {
            "line": 26,
            "column": 53
          }
        }
      })) +
      "</td>\n              </tr>\n";
  },
  "7": function(container, depth0, helpers, partials, data) {
    return "Update Available";
  },
  "9": function(container, depth0, helpers, partials, data) {
    return "Up-to-date";
  },
  "11": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "          <button onclick=\"composeEdit(this); return false;\" data-containerid=\"" +
      alias1(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 58,
            "column": 79
          },
          "end": {
            "line": 58,
            "column": 87
          }
        }
      }) : helper))) +
      "\" data-project=\"" +
      alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "editor") : depth0)) != null ? lookupProperty(stack1, "project") : stack1), depth0)) +
      "\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa-regular fa-pen-to-square\"></i> Edit</button>\n";
  },
  "13": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "          <button onclick=\"composeEdit(this); return false;\" data-containerid=\"" +
      alias1(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 60,
            "column": 79
          },
          "end": {
            "line": 60,
            "column": 87
          }
        }
      }) : helper))) +
      "\" data-project=\"" +
      alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "editor") : depth0)) != null ? lookupProperty(stack1, "project") : stack1), depth0)) +
      "\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa-regular fa-square-plus\"></i> Edit</button>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      alias5 = container.lambda,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div class=\"modal fade\" id=\"containerInfoModal\" tabindex=\"-1\" aria-label>\n  <div class=\"modal-dialog modal-dialog-scrollable modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title fs-5\" id=\"containerInfoLabel\">" +
      alias4(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 61
          },
          "end": {
            "line": 5,
            "column": 69
          }
        }
      }) : helper))) +
      "</h1>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <div style=\"text-align:center;margin-top:5px\" class=\"card\">\n          <img class=\"card-img-top\" style=\"padding:5px;width:10rem;height:10rem;\" src=\"/api/icons/query/" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "icon_slug") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 10,
            "column": 104
          },
          "end": {
            "line": 10,
            "column": 157
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">\n          <table border=\"0\" cellpadding=\"2\" cellspacing=\"0\">\n            <tr>\n              <td>Hostname:</td>\n              <td>" +
      alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0, "Config") : depth0)) != null ? lookupProperty(stack1, "Hostname") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Image:</td>\n              <td>" +
      alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0, "Config") : depth0)) != null ? lookupProperty(stack1, "Image") : stack1), depth0)) +
      "</td>\n            </tr>\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "downtime") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 23,
            "column": 12
          },
          "end": {
            "line": 28,
            "column": 19
          }
        }
      })) != null ? stack1 : "") +
      "            <tr>\n              <td></td>\n              <td>" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "UpdateStatus") : depth0)) != null ? lookupProperty(stack1, "updateDue") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(7, data, 0),
        "inverse": container.program(9, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 31,
            "column": 18
          },
          "end": {
            "line": 31,
            "column": 89
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n            </tr>\n            <tr>\n              <td>Created:</td>\n              <td>" +
      alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0, "UpdateStatus") : depth0)) != null ? lookupProperty(stack1, "imageCreated") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Latest Build:</td>\n              <td>" +
      alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0, "UpdateStatus") : depth0)) != null ? lookupProperty(stack1, "latestBuildDate") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Status:</td>\n              <td>" +
      alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0, "State") : depth0)) != null ? lookupProperty(stack1, "Status") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Health:</td>\n              <td>" +
      alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "State") : depth0)) != null ? lookupProperty(stack1, "Health") : stack1)) != null ? lookupProperty(stack1, "Status") : stack1), depth0)) +
      "</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 53,
            "column": 71
          },
          "end": {
            "line": 53,
            "column": 79
          }
        }
      }) : helper))) +
      "\" data-command=\"container-stop\">Stop</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 54,
            "column": 74
          },
          "end": {
            "line": 54,
            "column": 82
          }
        }
      }) : helper))) +
      "\" data-command=\"container-start\">Start</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 55,
            "column": 74
          },
          "end": {
            "line": 55,
            "column": 82
          }
        }
      }) : helper))) +
      "\" data-command=\"container-restart\">Restart</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "Name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 56,
            "column": 74
          },
          "end": {
            "line": 56,
            "column": 82
          }
        }
      }) : helper))) +
      "\" onclick=\"startContainerMonitor(this); return false;\">Monitor</button>\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "editor") : depth0)) != null ? lookupProperty(stack1, "editable") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(11, data, 0),
        "inverse": container.program(13, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 57,
            "column": 8
          },
          "end": {
            "line": 61,
            "column": 15
          }
        }
      })) != null ? stack1 : "") +
      "        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["desktopfooter"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<footer class=\"fixed-bottom bg-body-tertiary text-muted\" style=\"height:40px\">\n  <div class=\"container\" style=\"padding-top:5px\">\n    Version " +
      alias3((lookupProperty(helpers, "buildversion") || (depth0 && lookupProperty(depth0, "buildversion")) || alias2).call(alias1, "version", {
        "name": "buildversion",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 12
          },
          "end": {
            "line": 3,
            "column": 38
          }
        }
      })) +
      ", Build " +
      alias3((lookupProperty(helpers, "buildversion") || (depth0 && lookupProperty(depth0, "buildversion")) || alias2).call(alias1, "buildDateStr", {
        "name": "buildversion",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 46
          },
          "end": {
            "line": 3,
            "column": 77
          }
        }
      })) +
      "\n    <div id=\"footer\">\n    </div>\n  </div>\n</footer>\n";
  },
  "useData": true
});
this["app"]["templates"]["desktopheader"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "          <li class=\"nav-item\">\n            " +
      container.escapeExpression((lookupProperty(helpers, "toolbaritem") || (depth0 && lookupProperty(depth0, "toolbaritem")) || container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
        "name": "toolbaritem",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 11,
            "column": 12
          },
          "end": {
            "line": 11,
            "column": 32
          }
        }
      })) +
      "\n          </li>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<nav class=\"navbar navbar-expand-lg sticky-top bg-brand\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"/\"><img width=\"38px\" height=38px\" src=\"/assets/img/logo.png\" />&nbsp; DiscovrNinja!</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n" +
      ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "desktop") : depth0)) != null ? lookupProperty(stack1, "header") : stack1)) != null ? lookupProperty(stack1, "items") : stack1), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 9,
            "column": 8
          },
          "end": {
            "line": 13,
            "column": 17
          }
        }
      })) != null ? stack1 : "") +
      "        <li class=\"nav-item\">\n" +
      ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
        "name": "themechooser",
        "data": data,
        "indent": "          ",
        "helpers": helpers,
        "partials": partials,
        "decorators": container.decorators
      })) != null ? stack1 : "") +
      "        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n";
  },
  "usePartial": true,
  "useData": true
});
this["app"]["templates"]["dockerps"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "        <tr class=\"nowrap\">\n          <td>\n            <a title=\"Navigate to\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "publicUrl") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(2, data, 0),
        "inverse": container.program(4, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 20,
            "column": 35
          },
          "end": {
            "line": 20,
            "column": 195
          }
        }
      })) != null ? stack1 : "") +
      "><i class=\"fa-solid fa-link\"></i></a>\n            <a title=\"Export\" href=\"#\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 21,
            "column": 57
          },
          "end": {
            "line": 21,
            "column": 65
          }
        }
      }) : helper))) +
      "\" onclick=\"exportContainer(this); return false;\" class=\"btn btn-outline-secondary btn-sm\"><i class=\"fa-solid fa-file-export\"></i></a>\n            <a title=\"Edit container\" href=\"#\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 22,
            "column": 65
          },
          "end": {
            "line": 22,
            "column": 73
          }
        }
      }) : helper))) +
      "\" data-project=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "project") || (depth0 != null ? lookupProperty(depth0, "project") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "project",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 22,
            "column": 89
          },
          "end": {
            "line": 22,
            "column": 100
          }
        }
      }) : helper))) +
      "\" onclick=\"composeEdit(this); return false;\" class=\"btn btn-outline-secondary btn-sm\"><i class=\"fa-regular fa-pen-to-square\"></i></a>\n          </td>\n          <td><a title=\"View properties\" href=\"#\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 24,
            "column": 68
          },
          "end": {
            "line": 24,
            "column": 74
          }
        }
      }) : helper))) +
      "\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(6, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 24,
            "column": 76
          },
          "end": {
            "line": 24,
            "column": 135
          }
        }
      })) != null ? stack1 : "") +
      " onclick=\"containerInfo(this);return false;\">" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 24,
            "column": 180
          },
          "end": {
            "line": 24,
            "column": 188
          }
        }
      }) : helper))) +
      "</a></td>\n          <td align=\"center\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(6, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 29
          },
          "end": {
            "line": 25,
            "column": 88
          }
        }
      })) != null ? stack1 : "") +
      "><i class=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "stateCss") || (depth0 != null ? lookupProperty(depth0, "stateCss") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "stateCss",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 99
          },
          "end": {
            "line": 25,
            "column": 111
          }
        }
      }) : helper))) +
      "\" data-bs-toggle=\"tooltip\" title=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "status") || (depth0 != null ? lookupProperty(depth0, "status") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "status",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 145
          },
          "end": {
            "line": 25,
            "column": 155
          }
        }
      }) : helper))) +
      "\" data-bs-title=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "status") || (depth0 != null ? lookupProperty(depth0, "status") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "status",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 172
          },
          "end": {
            "line": 25,
            "column": 182
          }
        }
      }) : helper))) +
      "\"></i>\n          </td>\n          <td " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(10, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 27,
            "column": 14
          },
          "end": {
            "line": 27,
            "column": 116
          }
        }
      })) != null ? stack1 : "") +
      ">\n            " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "shutdown") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(13, data, 0),
        "inverse": container.program(15, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 28,
            "column": 12
          },
          "end": {
            "line": 28,
            "column": 68
          }
        }
      })) != null ? stack1 : "") +
      "\n          </td>\n          <td " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(6, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 30,
            "column": 14
          },
          "end": {
            "line": 30,
            "column": 73
          }
        }
      })) != null ? stack1 : "") +
      ">" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "shutdown") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(13, data, 0),
        "inverse": container.program(17, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 30,
            "column": 74
          },
          "end": {
            "line": 30,
            "column": 130
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n          <td " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(19, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 31,
            "column": 14
          },
          "end": {
            "line": 31,
            "column": 119
          }
        }
      })) != null ? stack1 : "") +
      ">" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "shutdown") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(13, data, 0),
        "inverse": container.program(21, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 31,
            "column": 120
          },
          "end": {
            "line": 31,
            "column": 182
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n          <td><span class=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "colorLevel") || (depth0 != null ? lookupProperty(depth0, "colorLevel") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "colorLevel",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 32,
            "column": 27
          },
          "end": {
            "line": 32,
            "column": 41
          }
        }
      }) : helper))) +
      "\">" +
      alias4(((helper = (helper = lookupProperty(helpers, "uptimeSecondsPercent") || (depth0 != null ? lookupProperty(depth0, "uptimeSecondsPercent") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "uptimeSecondsPercent",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 32,
            "column": 43
          },
          "end": {
            "line": 32,
            "column": 67
          }
        }
      }) : helper))) +
      "</span></td>\n        </tr>\n";
  },
  "2": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "href=\"" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "publicUrl") || (depth0 != null ? lookupProperty(depth0, "publicUrl") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "publicUrl",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 20,
            "column": 58
          },
          "end": {
            "line": 20,
            "column": 71
          }
        }
      }) : helper))) +
      "\" target=\"_new\" class=\"btn btn-outline-secondary btn-sm\" ";
  },
  "4": function(container, depth0, helpers, partials, data) {
    return " class=\"btn btn-outline-secondary btn-sm  disabled\" ";
  },
  "6": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "8": function(container, depth0, helpers, partials, data) {
    return "class=\"text-danger-emphasis\" ";
  },
  "10": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "cpuAlert") : depth0), {
      "name": "if",
      "hash": {},
      "fn": container.program(11, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 27,
          "column": 29
        },
        "end": {
          "line": 27,
          "column": 72
        }
      }
    })) != null ? stack1 : "");
  },
  "11": function(container, depth0, helpers, partials, data) {
    return "class=\"text-danger\" ";
  },
  "13": function(container, depth0, helpers, partials, data) {
    return "-";
  },
  "15": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "stats") : depth0)) != null ? lookupProperty(stack1, "cpuPercentStr") : stack1), depth0));
  },
  "17": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "stats") : depth0)) != null ? lookupProperty(stack1, "memoryUsageStr") : stack1), depth0));
  },
  "19": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "memoryAlert") : depth0), {
      "name": "if",
      "hash": {},
      "fn": container.program(11, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 31,
          "column": 29
        },
        "end": {
          "line": 31,
          "column": 75
        }
      }
    })) != null ? stack1 : "");
  },
  "21": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "stats") : depth0)) != null ? lookupProperty(stack1, "memoryFreePercentStr") : stack1), depth0));
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div class=\"table-responsive\">\n  <table class=\"table table-striped table-sm table-hover align-middle\">\n    <caption>" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "now") || (depth0 != null ? lookupProperty(depth0, "now") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(alias1, {
        "name": "now",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 13
          },
          "end": {
            "line": 3,
            "column": 20
          }
        }
      }) : helper))) +
      "\n      <caption>\n      <thead>\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>State</th>\n      <th>CPU</th>\n      <th>Memory</th>\n      <th>% Free</th>\n      <th>Uptime</th>\n    </tr>\n    </thead>\n    <tbody>\n" +
      ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0, {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 17,
            "column": 6
          },
          "end": {
            "line": 34,
            "column": 17
          }
        }
      })) != null ? stack1 : "") +
      "    </tbody>\n    <tfoot>\n    </tfoot>\n  </table>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["footer"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div style=\"margin-top: 50px;\"></div>\n<div style=\"height:30px;\" class=\"p-2 bg-secondary bg-gradient text-white fixed-bottom\">\n  &nbsp; Version: " +
      alias3((lookupProperty(helpers, "buildversion") || (depth0 && lookupProperty(depth0, "buildversion")) || alias2).call(alias1, "version", {
        "name": "buildversion",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 18
          },
          "end": {
            "line": 3,
            "column": 44
          }
        }
      })) +
      " Date: " +
      alias3((lookupProperty(helpers, "buildversion") || (depth0 && lookupProperty(depth0, "buildversion")) || alias2).call(alias1, "buildDateStr", {
        "name": "buildversion",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 51
          },
          "end": {
            "line": 3,
            "column": 82
          }
        }
      })) +
      "\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["header"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<nav class=\"navbar navbar-expand-lg sticky-top bg-brand\" style=\"background-color: #6f42c1 !important;color: white !important;\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"/admin/index\"><img width=\"38px\" height=38px\" src=\"/assets/img/logo.png\" />&nbsp; DiscovrNinja!</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"/\"><i class=\"fa-solid fa-house\"></i> Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/\"><i class=\"fa-solid fa-desktop\"></i> Desktop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/admin/catalog\"><i class=\"fa-solid fa-book\"></i> Catalog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" onclick=\"iconSearch(); return false;\" href=\"#\"><i class=\"fa-solid fa-icons\"></i> Icons</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fa-solid fa-screwdriver-wrench\"></i> Tools\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"scanDocker(); return false;\"><i class=\"fa-solid fa-map\"></i> Scan</a></li>\n            <li>\n              <hr class=\"dropdown-divider\">\n            </li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"composerise(); return false;\"><i class=\"fa-solid fa-box\"></i> Composerise</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-item\">\n" +
      ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
        "name": "themechooser",
        "data": data,
        "indent": "          ",
        "helpers": helpers,
        "partials": partials,
        "decorators": container.decorators
      })) != null ? stack1 : "") +
      "        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/auth/logout\"><i class=\"fa-solid fa-power-off\"></i> Logout</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n";
  },
  "usePartial": true,
  "useData": true
});
this["app"]["templates"]["iconsearch"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<div class=\"modal fade\" id=\"iconSearchModal\" tabindex=\"-1\" aria-label>\n  <div class=\"modal-dialog modal-dialog-scrollable modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title fs-5\">Icon Search</h1>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"mb-1\">\n          <label for=\"iconSearchQuery\" class=\"form-label\">Search Query</label>\n          <input type=\"text\" class=\"form-control\" id=\"iconSearchQuery\" placeholder=\"search\">\n        </div>\n        <div id=\"iconSearchResults\" style=\"height:256px;overflow:scroll;\"></div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" id=\"btnSearch\" onclick=\"performIconSearch(); return false;\" data-selectable=\"false\">Search</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["messagebox"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<div class=\"modal fade\" id=\"msgboxModal\" tabindex=\"-1\" aria-label>\n  <div class=\"modal-dialog modal-dialog-scrollable modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title fs-5\" id=\"msgboxLabel\"></h1>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\" id=\"msgboxBody\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["monitor"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<h1>\n  <div id=\"monitorContainerName\">Container</div>\n</h1>\n<table border=\"5 \" cellpadding=\"0\" cellspacing=\"5\">\n  <tr>\n    <td>Historical CPU Use %</td>\n  </tr>\n  <tr>\n    <td>\n      <div id=\"cpuchart\" style=\"width:600px;height:300px;\"></div>\n    </td>\n  </tr>\n  <tr>\n    <td>Historical Memory Free %</td>\n  </tr>\n  <tr>\n    <td>\n      <div id=\"memorychart\" style=\"width:600px;height:300px;\"></div>\n    </td>\n  </tr>\n</table>\n<div id=\"containerLogs\" class=\"terminal\">\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["projects"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "    <div class=\"accordion-item\">\n      <h2 class=\"accordion-header\">\n        <button class=\"accordion-button" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (data && lookupProperty(data, "first")), {
        "name": "if",
        "hash": {},
        "fn": container.program(2, data, 0, blockParams, depths),
        "inverse": container.program(4, data, 0, blockParams, depths),
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 39
          },
          "end": {
            "line": 5,
            "column": 78
          }
        }
      })) != null ? stack1 : "") +
      "\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse-" +
      alias4(((helper = (helper = lookupProperty(helpers, "index") || (data && lookupProperty(data, "index"))) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "index",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 146
          },
          "end": {
            "line": 5,
            "column": 156
          }
        }
      }) : helper))) +
      "\" aria-expanded=\"true\" aria-controls=\"collapse-" +
      alias4(((helper = (helper = lookupProperty(helpers, "index") || (data && lookupProperty(data, "index"))) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "index",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 203
          },
          "end": {
            "line": 5,
            "column": 213
          }
        }
      }) : helper))) +
      "\">\n          " +
      alias4(((helper = (helper = lookupProperty(helpers, "key") || (data && lookupProperty(data, "key"))) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "key",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 6,
            "column": 10
          },
          "end": {
            "line": 6,
            "column": 18
          }
        }
      }) : helper))) +
      "\n        </button>\n      </h2>\n      <div id=\"collapse-" +
      alias4(((helper = (helper = lookupProperty(helpers, "index") || (data && lookupProperty(data, "index"))) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "index",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 9,
            "column": 24
          },
          "end": {
            "line": 9,
            "column": 34
          }
        }
      }) : helper))) +
      "\" class=\"accordion-collapse collapse" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (data && lookupProperty(data, "first")), {
        "name": "if",
        "hash": {},
        "fn": container.program(6, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 9,
            "column": 70
          },
          "end": {
            "line": 9,
            "column": 96
          }
        }
      })) != null ? stack1 : "") +
      "\" data-bs-parent=\"#projects\">\n        <div class=\"accordion-body\">\n          <div class=\"container text-left\">\n            <div class=\"row justify-content-md-left\">\n              <div class=\"col col-lg-2\">\n                <img style=\"max-width:128px;\" src=\"/api/icons/query/" +
      alias4(((helper = (helper = lookupProperty(helpers, "key") || (data && lookupProperty(data, "key"))) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "key",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 14,
            "column": 68
          },
          "end": {
            "line": 14,
            "column": 76
          }
        }
      }) : helper))) +
      "\" />\n              </div>\n              <div class=\"col-md-auto\">\n                <table class=\"table table-bordered\">\n                  <tbody>\n                    <tr>\n                      <td>Compose file:</td>\n                      <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "config") || (depth0 != null ? lookupProperty(depth0, "config") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "config",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 21,
            "column": 26
          },
          "end": {
            "line": 21,
            "column": 36
          }
        }
      }) : helper))) +
      "</td>\n                    </tr>\n                    <tr>\n                      <td>Environment file:</td>\n                      <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "environment") || (depth0 != null ? lookupProperty(depth0, "environment") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "environment",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 26
          },
          "end": {
            "line": 25,
            "column": 41
          }
        }
      }) : helper))) +
      "</td>\n                    </tr>\n                    <tr>\n                      <td>Project Folder :</td>\n                      <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "workingFolder") || (depth0 != null ? lookupProperty(depth0, "workingFolder") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "workingFolder",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 29,
            "column": 26
          },
          "end": {
            "line": 29,
            "column": 43
          }
        }
      }) : helper))) +
      "</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Container Name</th>\n                      <th>Hostname</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n" +
      ((stack1 = lookupProperty(helpers, "each").call(alias1, (depth0 != null ? lookupProperty(depth0, "containers") : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(8, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 42,
            "column": 20
          },
          "end": {
            "line": 50,
            "column": 29
          }
        }
      })) != null ? stack1 : "") +
      "                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n";
  },
  "2": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "4": function(container, depth0, helpers, partials, data) {
    return " collapsed";
  },
  "6": function(container, depth0, helpers, partials, data) {
    return " show";
  },
  "8": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "                      <tr>\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "editable") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(9, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 44,
            "column": 24
          },
          "end": {
            "line": 46,
            "column": 31
          }
        }
      })) != null ? stack1 : "") +
      "                        <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "containerName",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 47,
            "column": 28
          },
          "end": {
            "line": 47,
            "column": 45
          }
        }
      }) : helper))) +
      "</td>\n                        <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "hostname") || (depth0 != null ? lookupProperty(depth0, "hostname") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "hostname",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 48,
            "column": 28
          },
          "end": {
            "line": 48,
            "column": 40
          }
        }
      }) : helper))) +
      "</td>\n                      </tr>\n";
  },
  "9": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "                          <td><button onclick=\"composeEdit(this); return false;\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "containerName",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 45,
            "column": 99
          },
          "end": {
            "line": 45,
            "column": 116
          }
        }
      }) : helper))) +
      "\" data-projectpath=\"" +
      alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1], "projectPath") : depths[1]), depth0)) +
      "\" data-project=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "projectName") || (depth0 != null ? lookupProperty(depth0, "projectName") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "projectName",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 45,
            "column": 170
          },
          "end": {
            "line": 45,
            "column": 185
          }
        }
      }) : helper))) +
      "\" type=\"button\" class=\"btn btn-outline-secondary btn-sm\"><i class=\"fa-regular fa-pen-to-square\"></i></button></td>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<div class=\"accordion\" id=\"projects\">\n" +
      ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 2
          },
          "end": {
            "line": 59,
            "column": 11
          }
        }
      })) != null ? stack1 : "") +
      "</div>\n";
  },
  "useData": true,
  "useDepths": true
});
this["app"]["templates"]["search"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "\n";
  },
  "useData": true
});
this["app"]["templates"]["service"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "3": function(container, depth0, helpers, partials, data) {
    return "disabled";
  },
  "5": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "7": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "9": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "opacity:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), depth0)) +
      " !important;";
  },
  "11": function(container, depth0, helpers, partials, data) {
    return "/api/icons/question";
  },
  "13": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "/api/icons/r/" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "iconCatalog") : stack1), depth0)) +
      "/" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "iconSlug") : stack1), depth0)) +
      "/resource";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.lambda,
      alias3 = container.escapeExpression,
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<button " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "available") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 8
          },
          "end": {
            "line": 1,
            "column": 56
          }
        }
      })) != null ? stack1 : "") +
      " data-name=\"" +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "containerName") : stack1), depth0)) +
      "\" data-url=\"" +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "public") : stack1), depth0)) +
      "\" onclick=\"navigateTo(this); return false;\" type=\"button\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.program(7, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 192
          },
          "end": {
            "line": 1,
            "column": 279
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias4).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(9, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 295
          },
          "end": {
            "line": 1,
            "column": 378
          }
        }
      })) != null ? stack1 : "") +
      "\">\n  <img style=\"padding:10px;max-width:64px;max-height:64px\" src=\"" +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "iconSlug") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(11, data, 0),
        "inverse": container.program(13, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 64
          },
          "end": {
            "line": 2,
            "column": 199
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n  <br /> " +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "name") : stack1), depth0)) +
      "\n</button>\n";
  },
  "useData": true
});
this["app"]["templates"]["tagcloud"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper, alias1 = container.escapeExpression,
      alias2 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias3 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "    <li><a data-weight=\"" +
      alias1(container.lambda(depth0, depth0)) +
      "\" href=\"" +
      alias1(((depths[1] && lookupProperty(depths[1], "tagfunc")) || alias3).call(alias2, (data && lookupProperty(data, "key")), {
        "name": "../tagfunc",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 40
          },
          "end": {
            "line": 3,
            "column": 59
          }
        }
      })) +
      "\">" +
      alias1(((helper = (helper = lookupProperty(helpers, "key") || (data && lookupProperty(data, "key"))) != null ? helper : alias3), (typeof helper === "function" ? helper.call(alias2, {
        "name": "key",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 61
          },
          "end": {
            "line": 3,
            "column": 69
          }
        }
      }) : helper))) +
      "</a></li>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<ul class=\"cloud\" role=\"navigation\" aria-label=\"Tag cloud\">\n" +
      ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "feed") : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 2
          },
          "end": {
            "line": 4,
            "column": 11
          }
        }
      })) != null ? stack1 : "") +
      "</ul>\n";
  },
  "useData": true,
  "useDepths": true
});
this["app"]["templates"]["themechooser"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<div class=\"dropdown\" data-hb-component=\"themechooser\">\n  <button class=\"btn dropdown-toggle\" style=\"color:white!important\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    <i style=\"color:white!important\" id=\"activeTheme\" class=\"bi bi-circle-half\"></i> Theme\n  </button>\n  <ul class=\"dropdown-menu dropdown-menu-end\">\n    <li><button type=\"button\" class=\"dropdown-item d-flex align-items-center\" aria-pressed=\"false\" onclick=\"ui().themeChooser().chooseTheme('light');\">\n        <i id=\"light\" class=\"bi bi-sun\"></i> Light</button>\n    </li>\n    <li> <button type=\"button\" class=\"dropdown-item d-flex align-items-center\" aria-pressed=\"false\" onclick=\"ui().themeChooser().chooseTheme('dark');\">\n        <i id=\"dark\" class=\"bi bi-moon-stars\"></i> Dark</button>\n    </li>\n    <li><button type=\"button\" class=\"dropdown-item d-flex align-items-center\" aria-pressed=\"false\" onclick=\"ui().themeChooser().chooseTheme('auto')\">\n        <i id=\"auto\" class=\"bi bi-circle-half\"></i> Auto</button>\n    </li>\n  </ul>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["toast"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<div class=\"toast-container position-fixed bottom-0 end-0 p-3\">\n  <div id=\"toast\" class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <i class=\"fa-solid fa-square\"></i>\n      <strong class=\"me-auto\" id=\"toastLabel\"></strong>\n      <small id=\"toastSmall\"></small>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\" id=\"toastBody\">\n      Hello, world! This is a toast message.\n    </div>\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-discovrninja"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "5": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "opacity:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), depth0)) +
      " !important;";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<button data-name=\"\" data-url=\"\" onclick=\"window.location.href='/admin/index'; return false;\" type=\"button\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias2).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 119
          },
          "end": {
            "line": 1,
            "column": 206
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias2).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 222
          },
          "end": {
            "line": 1,
            "column": 305
          }
        }
      })) != null ? stack1 : "") +
      "\">\n  <img style=\"padding:10px;max-width:64px;max-height:64px\" src=\"/assets/img/logo.png\" />\n  <br /> Administration\n</button>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-globe"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "alt") : stack1), depth0));
  },
  "3": function(container, depth0, helpers, partials, data) {
    return "32558";
  },
  "5": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "7": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "9": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "opacity:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), depth0)) +
      " !important;";
  },
  "11": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "size") : stack1), depth0));
  },
  "13": function(container, depth0, helpers, partials, data) {
    return "200";
  },
  "15": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "&lat=" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "latitude") : stack1), depth0));
  },
  "17": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "&long=" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "longitude") : stack1), depth0));
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<button data-url=\"https://www.fourmilab.ch/cgi-bin/Earth?size=640&img=learth&gamma=1.32&opt=-l&lat=" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "latitude") : stack1), depth0)) +
      "&lon=" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "longitude") : stack1), depth0)) +
      "&alt=" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "alt") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 152
          },
          "end": {
            "line": 1,
            "column": 208
          }
        }
      })) != null ? stack1 : "") +
      "&tle=&date=0&utc=&jd=\" onclick=\"navigateTo(this); return false;\" type=\"button\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.program(7, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 298
          },
          "end": {
            "line": 1,
            "column": 385
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"margin:5px;height:fit-content !important;" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(9, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 442
          },
          "end": {
            "line": 1,
            "column": 525
          }
        }
      })) != null ? stack1 : "") +
      "\">\n\n  <img class=\"widgetglobe\" border=\"0\" src=\"/api/desktop/background/globe?h=" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "size") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(11, data, 0),
        "inverse": container.program(13, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 75
          },
          "end": {
            "line": 3,
            "column": 131
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "latitude") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(15, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 131
          },
          "end": {
            "line": 3,
            "column": 189
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "longitude") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(17, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 189
          },
          "end": {
            "line": 3,
            "column": 250
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "alt") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 250
          },
          "end": {
            "line": 3,
            "column": 293
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n  <span class=\"clock\"></span>\n</button>\n<script type=\"text/javascript\">\n  function time() {\n    var d = new Date();\n    var s = d.getSeconds();\n    var m = d.getMinutes();\n    var h = d.getHours();\n    var span = document.querySelector(\".clock\");\n    span.textContent =\n      (\"0\" + h).substr(-2) + \":\" + (\"0\" + m).substr(-2) + \":\" + (\"0\" + s).substr(-2);\n  }\n\n  setInterval(time, 1000);\n  time();\n\n</script>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-link"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "5": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "opacity:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), depth0)) +
      " !important;";
  },
  "7": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "https://www.google.com/s2/favicons?domain=" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "domainUrl") : stack1), depth0)) +
      "&sz=64";
  },
  "9": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "/api/icons/r/" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "iconCatalog") : stack1), depth0)) +
      "/" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "iconSlug") : stack1), depth0)) +
      "/resource";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<button data-url=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "url") : stack1), depth0)) +
      "\" onclick=\"navigateTo(this); return false;\" type=\"button\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 103
          },
          "end": {
            "line": 1,
            "column": 190
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 206
          },
          "end": {
            "line": 1,
            "column": 289
          }
        }
      })) != null ? stack1 : "") +
      "\">\n  <img style=\"padding:10px;max-width:64px;max-height:64px\" src=\"" +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "iconSlug") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(7, data, 0),
        "inverse": container.program(9, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 64
          },
          "end": {
            "line": 2,
            "column": 253
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n  <br /> " +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "name") : stack1), depth0)) +
      "\n</button>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-news"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "5": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "opacity:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), depth0)) +
      " !important;";
  },
  "7": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "https://www.google.com/s2/favicons?domain=" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "domainUrl") : stack1), depth0)) +
      "&sz=64";
  },
  "9": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "iconUrl") : stack1), depth0));
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<button data-url=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "url") : stack1), depth0)) +
      "\" onclick=\"navigateToNews(this); return false;\" type=\"button\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 107
          },
          "end": {
            "line": 1,
            "column": 194
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 210
          },
          "end": {
            "line": 1,
            "column": 293
          }
        }
      })) != null ? stack1 : "") +
      "\">\n  <img style=\"object-fit:contain;padding:10px;max-width:64px;height:64px\" src=\"" +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "iconUrl") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(7, data, 0),
        "inverse": container.program(9, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 79
          },
          "end": {
            "line": 2,
            "column": 218
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n  <br /> " +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "name") : stack1), depth0)) +
      "\n</button>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-search"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "    <div class=\"d-flex\">\n      <input class=\"form-control me-2\" id=\"q\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-primary\" type=\"button\" onclick=\"doSearch('#q');return false;\">Search</button>\n    </div>\n    <script type=\"text/javascript\">\n      ui(\"#q\").enterCheck({\n        onEnterKey: function () {\n          doSearch('#q');\n          return false;\n        }\n      });\n\n    </script>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-tagcloud"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    return "<div class=\"container\" id=\"tags\"></div>\n<script type=\"text/javascript\">\n  tagCloud(\"tags\", \"/bookmarks?tag={tag}\");\n\n</script>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-video"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "poster=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "poster") : stack1), depth0)) +
      "\" ";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "    <source src=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "mp4video") : stack1), depth0)) +
      "\" type=\"video/mp4\" />\n";
  },
  "5": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "    <source src=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "webmvideo") : stack1), depth0)) +
      "\" type=\"video/webm\" />\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<video id=\"videoplayer\" class=\"video-js\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "poster") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 41
          },
          "end": {
            "line": 1,
            "column": 100
          }
        }
      })) != null ? stack1 : "") +
      " controls preload=\"auto\" data-setup=\"{}\">\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "mp4video") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(3, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 2
          },
          "end": {
            "line": 4,
            "column": 9
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "webmvideo") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 2
          },
          "end": {
            "line": 7,
            "column": 9
          }
        }
      })) != null ? stack1 : "") +
      "  <p class=\"vjs-no-js\">\n    To view this video please enable JavaScript, and consider upgrading to a\n    web browser that\n    <a href=\"https://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\n  </p>\n</video>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-weather"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = container.lambda,
      alias4 = container.escapeExpression,
      alias5 = "function",
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "    <div class=\"col\">\n      <center>\n        <button type=\"button\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias2).call(alias1, ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1])) != null ? lookupProperty(stack1, "p") : stack1)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(2, data, 0, blockParams, depths),
        "inverse": container.program(4, data, 0, blockParams, depths),
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 41
          },
          "end": {
            "line": 5,
            "column": 130
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"white-space:nowrap;" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias2).call(alias1, ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1])) != null ? lookupProperty(stack1, "p") : stack1)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(6, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 165
          },
          "end": {
            "line": 5,
            "column": 250
          }
        }
      })) != null ? stack1 : "") +
      "\" onclick=\"viewWeather(" +
      alias4(alias3(((stack1 = (depths[1] != null ? lookupProperty(depths[1], "settings") : depths[1])) != null ? lookupProperty(stack1, "latitude") : stack1), depth0)) +
      ", " +
      alias4(alias3(((stack1 = (depths[1] != null ? lookupProperty(depths[1], "settings") : depths[1])) != null ? lookupProperty(stack1, "longitude") : stack1), depth0)) +
      ", " +
      alias4(alias3(((stack1 = (depths[1] != null ? lookupProperty(depths[1], "settings") : depths[1])) != null ? lookupProperty(stack1, "days") : stack1), depth0)) +
      ", " +
      alias4(((helper = (helper = lookupProperty(helpers, "index") || (data && lookupProperty(data, "index"))) != null ? helper : alias2), (typeof helper === alias5 ? helper.call(alias1, {
        "name": "index",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 349
          },
          "end": {
            "line": 5,
            "column": 359
          }
        }
      }) : helper))) +
      ");return false;\">\n          <img src=\"/assets/weather/" +
      alias4(((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : alias2), (typeof helper === alias5 ? helper.call(alias1, {
        "name": "icon",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 6,
            "column": 36
          },
          "end": {
            "line": 6,
            "column": 44
          }
        }
      }) : helper))) +
      "\" style=\"max-width:64px; max-height:64px;\" alt=\"" +
      alias4(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? lookupProperty(stack1, "description") : stack1), depth0)) +
      "\" /><br />\n          <small>" +
      alias4(((helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : alias2), (typeof helper === alias5 ? helper.call(alias1, {
        "name": "date",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 7,
            "column": 17
          },
          "end": {
            "line": 7,
            "column": 25
          }
        }
      }) : helper))) +
      "</small>\n        </button>\n      </center>\n    </div>\n";
  },
  "2": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "4": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1])) != null ? lookupProperty(stack1, "p") : stack1)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "6": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "opacity:" +
      container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1])) != null ? lookupProperty(stack1, "p") : stack1)) != null ? lookupProperty(stack1, "opacity") : stack1), depth0)) +
      " !important;";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div class=\"row\">\n" +
      ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "weather") : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 2
          },
          "end": {
            "line": 11,
            "column": 11
          }
        }
      })) != null ? stack1 : "") +
      "</div>\n<div class=\"row\">\n  <div class=\"col\"><i>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "quarter") : stack1), depth0)) +
      ", " +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "city") : stack1), depth0)) +
      ", " +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "county") : stack1), depth0)) +
      ", " +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "country") : stack1), depth0)) +
      "</i></i></div>\n</div>\n";
  },
  "useData": true,
  "useDepths": true
});
this["app"]["templates"]["news"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "        <tr>\n          <td>\n            <p class=\"headline\"><a href=\"" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "link",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 20,
            "column": 41
          },
          "end": {
            "line": 20,
            "column": 49
          }
        }
      }) : helper))) +
      "\" target=\"_new\" style=\"text-decoration: none !important;\">" +
      ((stack1 = ((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 20,
            "column": 107
          },
          "end": {
            "line": 20,
            "column": 118
          }
        }
      }) : helper))) != null ? stack1 : "") +
      "</a></p>\n            " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "image") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(2, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 21,
            "column": 12
          },
          "end": {
            "line": 21,
            "column": 59
          }
        }
      })) != null ? stack1 : "") +
      "\n            <p>" +
      ((stack1 = ((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "description",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 22,
            "column": 15
          },
          "end": {
            "line": 22,
            "column": 32
          }
        }
      }) : helper))) != null ? stack1 : "") +
      "</p>\n          </td>\n        </tr>\n";
  },
  "2": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<img src=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "image") : depth0)) != null ? lookupProperty(stack1, "url") : stack1), depth0)) +
      "\" />";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div id=\"news\" class=\"newsprint\">\n  <div class=\"content\">\n    <table border=\"0\" cellpadding=\"2\" cellspacing=\"0\">\n      <tr class=\"masthead\">\n        <td id=\"mastheadbanner\" style=\"border-bottom: solid 1px black\">\n          <canvas id=\"mastheadcanvas\" style=\"display:none\"></canvas>\n          <a href=\"#\" onclick=\"newsPage('" +
      alias3(((helper = (helper = lookupProperty(helpers, "feedUrl") || (depth0 != null ? lookupProperty(depth0, "feedUrl") : depth0)) != null ? helper : alias2), (typeof helper === "function" ? helper.call(alias1, {
        "name": "feedUrl",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 7,
            "column": 41
          },
          "end": {
            "line": 7,
            "column": 52
          }
        }
      }) : helper))) +
      "'); return false;\">\n            <img id=\"mastheadimg\" onload=\"setBgColor('mastheadimg', 'mastheadbanner')\" src=\"/api/resources/p?u=" +
      alias3((lookupProperty(helpers, "urlencode") || (depth0 && lookupProperty(depth0, "urlencode")) || alias2).call(alias1, ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "meta") : depth0)) != null ? lookupProperty(stack1, "image") : stack1)) != null ? lookupProperty(stack1, "url") : stack1), {
        "name": "urlencode",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 111
          },
          "end": {
            "line": 8,
            "column": 139
          }
        }
      })) +
      "\" />\n          </a>\n        </td>\n      </tr>\n      <tr>\n        <td style=\"border-bottom: solid 1px black\">\n          " +
      alias3(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "meta") : depth0)) != null ? lookupProperty(stack1, "pubDateStr") : stack1), depth0)) +
      "\n        </td>\n      </tr>\n" +
      ((stack1 = lookupProperty(helpers, "each").call(alias1, (depth0 != null ? lookupProperty(depth0, "items") : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 17,
            "column": 6
          },
          "end": {
            "line": 25,
            "column": 15
          }
        }
      })) != null ? stack1 : "") +
      "    </table>\n  </div>\n  /\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["weather"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      alias5 = container.lambda,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "  <div class=\"row\">\n    <div class=\"col bg-secondary-subtle\">\n      <center><small>" +
      alias4(((helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "date",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 21
          },
          "end": {
            "line": 3,
            "column": 29
          }
        }
      }) : helper))) +
      "</small><br /><img src=\"/assets/weather/" +
      alias4(((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "icon",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 69
          },
          "end": {
            "line": 3,
            "column": 77
          }
        }
      }) : helper))) +
      "\" style=\"max-width 100px; height:100px;\" alt=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "text",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 123
          },
          "end": {
            "line": 3,
            "column": 131
          }
        }
      }) : helper))) +
      "\" />\n        <br /><small>" +
      alias4(((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "text",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 21
          },
          "end": {
            "line": 4,
            "column": 29
          }
        }
      }) : helper))) +
      "</small>\n      </center>\n    </div>\n    <div class=\"col\">\n      <table class=\"table\">\n        <tr>\n          <td>Sunrise:</td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "sunrise") || (depth0 != null ? lookupProperty(depth0, "sunrise") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "sunrise",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 11,
            "column": 14
          },
          "end": {
            "line": 11,
            "column": 25
          }
        }
      }) : helper))) +
      "</td>\n        </tr>\n        <tr>\n          <td>Sunset:</td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "sunset") || (depth0 != null ? lookupProperty(depth0, "sunset") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "sunset",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 15,
            "column": 14
          },
          "end": {
            "line": 15,
            "column": 24
          }
        }
      }) : helper))) +
      "</td>\n        </tr>\n        <tr>\n          <td>Temperature:</td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "temperature2m") || (depth0 != null ? lookupProperty(depth0, "temperature2m") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "temperature2m",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 19,
            "column": 14
          },
          "end": {
            "line": 19,
            "column": 31
          }
        }
      }) : helper))) +
      "&deg;C</td>\n        </tr>\n        <tr>\n          <td>Precipitation chance:</td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "precipitationProbabilityMax") || (depth0 != null ? lookupProperty(depth0, "precipitationProbabilityMax") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "precipitationProbabilityMax",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 23,
            "column": 14
          },
          "end": {
            "line": 23,
            "column": 45
          }
        }
      }) : helper))) +
      "%</td>\n        </tr>\n        <tr>\n          <td>Wind speed: </td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "windSpeed10mMax") || (depth0 != null ? lookupProperty(depth0, "windSpeed10mMax") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "windSpeed10mMax",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 27,
            "column": 14
          },
          "end": {
            "line": 27,
            "column": 33
          }
        }
      }) : helper))) +
      " mph</td>\n        </tr>\n        <tr>\n          <td>Wind gusts: </td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "windGusts10mMax") || (depth0 != null ? lookupProperty(depth0, "windGusts10mMax") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "windGusts10mMax",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 31,
            "column": 14
          },
          "end": {
            "line": 31,
            "column": 33
          }
        }
      }) : helper))) +
      " mph\n          </td>\n        </tr>\n        <tr>\n          <td>Wind direction: </td>\n          <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "windDirection10mDominant") || (depth0 != null ? lookupProperty(depth0, "windDirection10mDominant") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "windDirection10mDominant",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 36,
            "column": 14
          },
          "end": {
            "line": 36,
            "column": 42
          }
        }
      }) : helper))) +
      "&deg; " +
      alias4(((helper = (helper = lookupProperty(helpers, "windDirection") || (depth0 != null ? lookupProperty(depth0, "windDirection") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "windDirection",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 36,
            "column": 48
          },
          "end": {
            "line": 36,
            "column": 65
          }
        }
      }) : helper))) +
      "</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\"><i>" +
      alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "quarter") : stack1), depth0)) +
      ", " +
      alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "city") : stack1), depth0)) +
      ", " +
      alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "county") : stack1), depth0)) +
      ", " +
      alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "location") : depth0)) != null ? lookupProperty(stack1, "address") : stack1)) != null ? lookupProperty(stack1, "country") : stack1), depth0)) +
      "</i></i></div>\n  </div>\n";
  },
  "useData": true
});
