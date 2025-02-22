this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["admindash"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
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

    return "                <tr>\n                  <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 28,
            "column": 22
          },
          "end": {
            "line": 28,
            "column": 31
          }
        }
      }) : helper))) +
      "</td>\n                  <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "total") || (depth0 != null ? lookupProperty(depth0, "total") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "total",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 29,
            "column": 22
          },
          "end": {
            "line": 29,
            "column": 31
          }
        }
      }) : helper))) +
      "</td>\n                </tr>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\" style=\"padding-top:5px ! important;\">\n      <div class=\"card\" style=\"padding: 5px;width: 20rem;\">\n        <div class=\"card-body\">\n          <img style=\"max-width:200px;\" src=\"/assets/img/logo.png\" />\n          <p class=\"cardo-regular\" style=\"font-size:48px;\">Discovrninja</p>\n          <p>Version " +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "version") : depth0)) != null ? lookupProperty(stack1, "version") : stack1), depth0)) +
      "</p>\n          <p>Build " +
      alias2((lookupProperty(helpers, "format") || (depth0 && lookupProperty(depth0, "format")) || container.hooks.helperMissing).call(alias3, "datetime", ((stack1 = (depth0 != null ? lookupProperty(depth0, "version") : depth0)) != null ? lookupProperty(stack1, "epochBuildDate") : stack1), {
        "name": "format",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 9,
            "column": 19
          },
          "end": {
            "line": 9,
            "column": 63
          }
        }
      })) +
      "</p>\n          <p>Username " +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "user") : depth0)) != null ? lookupProperty(stack1, "username") : stack1), depth0)) +
      "</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\" style=\"padding-top:5px !important;\">\n      <div class=\"card\" style=\"padding:5px;width: 20rem;\">\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-hover table-sm caption-top\">\n            <caption>Container States</caption>\n            <thead>\n              <tr>\n                <th scope=\"col\">Status</th>\n                <th scope=\"col\">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n" +
      ((stack1 = lookupProperty(helpers, "each").call(alias3, (depth0 != null ? lookupProperty(depth0, "states") : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 26,
            "column": 14
          },
          "end": {
            "line": 31,
            "column": 25
          }
        }
      })) != null ? stack1 : "") +
      "            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col\" style=\"padding-top:5px ! important;\">\n      <div class=\"card\" style=\"padding:5px;width: 20rem;\">\n\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped table-hover table-sm table-nowrap\">\n              <tbody>\n                <tr>\n                  <td>CPU Cores</td>\n                  <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0)) != null ? lookupProperty(stack1, "info") : stack1)) != null ? lookupProperty(stack1, "NCPU") : stack1), depth0)) +
      "</td>\n                </tr>\n                <tr>\n                  <td>Containers</td>\n                  <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0)) != null ? lookupProperty(stack1, "info") : stack1)) != null ? lookupProperty(stack1, "Containers") : stack1), depth0)) +
      "</td>\n                </tr>\n                <tr>\n                  <td>Containers Running</td>\n                  <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0)) != null ? lookupProperty(stack1, "info") : stack1)) != null ? lookupProperty(stack1, "ContainersRunning") : stack1), depth0)) +
      "</td>\n                </tr>\n                <tr>\n                  <td>Containers Paused</td>\n                  <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0)) != null ? lookupProperty(stack1, "info") : stack1)) != null ? lookupProperty(stack1, "ContainersPaused") : stack1), depth0)) +
      "</td>\n                </tr>\n                <tr>\n                  <td>Containers Stopped</td>\n                  <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0)) != null ? lookupProperty(stack1, "info") : stack1)) != null ? lookupProperty(stack1, "ContainersStopped") : stack1), depth0)) +
      "</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\" style=\"padding-top:5px ! important;\">\n      <div class=\"card\" style=\"padding:5px;width: 20rem;\">\n        <div class=\"card-body\">\n\n          <svg version=\"1.1\" id=\"dashclock\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"94.257 101.184 358 401.184\" enable-background=\"new 94.257 101.184 394.257 401.184\" xml:space=\"preserve\">\n            <circle id=\"face\" fill=\"#F4F3ED\" cx=\"243.869\" cy=\"250.796\" r=\"130.8\" />\n            <path id=\"rim\" fill=\"#383838\" d=\"M243.869,101.184c-82.629,0-149.612,66.984-149.612,149.612c0,82.629,66.983,149.612,149.612,149.612\n        S393.48,333.425,393.48,250.796S326.498,101.184,243.869,101.184z M243.869,386.455c-74.922,0-135.659-60.736-135.659-135.659\n        c0-74.922,60.737-135.659,135.659-135.659c74.922,0,135.658,60.737,135.658,135.659\n        C379.527,325.719,318.791,386.455,243.869,386.455z\" />\n            <g id=\"inner\">\n              <g opacity=\"0.2\">\n                <path fill=\"#C4C4C4\" d=\"M243.869,114.648c-75.748,0-137.154,61.406-137.154,137.153c0,75.749,61.406,137.154,137.154,137.154\n                        c75.748,0,137.153-61.405,137.153-137.154C381.022,176.054,319.617,114.648,243.869,114.648z M243.869,382.56\n                        c-72.216,0-130.758-58.543-130.758-130.758s58.542-130.758,130.758-130.758c72.216,0,130.758,58.543,130.758,130.758\n                        S316.085,382.56,243.869,382.56z\" />\n              </g>\n              <g>\n                <path fill=\"#282828\" d=\"M243.869,113.637c-75.748,0-137.154,61.406-137.154,137.153c0,75.749,61.406,137.154,137.154,137.154\n                        c75.748,0,137.153-61.405,137.153-137.154C381.022,175.043,319.617,113.637,243.869,113.637z M243.869,381.548\n                        c-72.216,0-130.758-58.542-130.758-130.757c0-72.216,58.542-130.758,130.758-130.758c72.216,0,130.758,58.543,130.758,130.758\n                        C374.627,323.005,316.085,381.548,243.869,381.548z\" />\n              </g>\n            </g>\n            <g id=\"markings\">\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"243.5\" y1=\"139\" x2=\"243.5\" y2=\"133\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"231.817\" y1=\"139.651\" x2=\"231.19\" y2=\"133.684\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"220.266\" y1=\"141.52\" x2=\"219.018\" y2=\"135.65\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"208.973\" y1=\"144.585\" x2=\"207.119\" y2=\"138.879\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"198.063\" y1=\"148.814\" x2=\"195.623\" y2=\"143.333\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"187.655\" y1=\"154.161\" x2=\"184.655\" y2=\"148.965\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"177.862\" y1=\"160.566\" x2=\"174.335\" y2=\"155.712\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"168.792\" y1=\"167.96\" x2=\"164.778\" y2=\"163.501\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"160.545\" y1=\"176.262\" x2=\"156.087\" y2=\"172.246\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"153.211\" y1=\"185.379\" x2=\"148.358\" y2=\"181.852\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"146.871\" y1=\"195.214\" x2=\"141.675\" y2=\"192.213\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"141.593\" y1=\"205.658\" x2=\"136.112\" y2=\"203.216\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"137.436\" y1=\"216.596\" x2=\"131.729\" y2=\"214.741\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"134.445\" y1=\"227.909\" x2=\"128.576\" y2=\"226.66\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.653\" y1=\"239.472\" x2=\"126.685\" y2=\"238.843\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.079\" y1=\"251.16\" x2=\"126.079\" y2=\"251.158\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.73\" y1=\"262.843\" x2=\"126.762\" y2=\"263.468\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"134.598\" y1=\"274.395\" x2=\"128.729\" y2=\"275.64\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"137.664\" y1=\"285.688\" x2=\"131.958\" y2=\"287.539\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"141.893\" y1=\"296.598\" x2=\"136.412\" y2=\"299.035\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"147.24\" y1=\"307.006\" x2=\"142.043\" y2=\"310.004\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"153.645\" y1=\"316.799\" x2=\"148.791\" y2=\"320.323\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"161.04\" y1=\"325.868\" x2=\"156.58\" y2=\"329.881\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"169.341\" y1=\"334.115\" x2=\"165.325\" y2=\"338.572\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"178.459\" y1=\"341.449\" x2=\"174.931\" y2=\"346.302\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"188.294\" y1=\"347.789\" x2=\"185.292\" y2=\"352.984\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"198.738\" y1=\"353.066\" x2=\"196.295\" y2=\"358.548\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"209.676\" y1=\"357.223\" x2=\"207.82\" y2=\"362.93\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"220.989\" y1=\"360.214\" x2=\"219.739\" y2=\"366.084\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"232.552\" y1=\"362.006\" x2=\"231.922\" y2=\"367.975\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"244.239\" y1=\"362.58\" x2=\"244.237\" y2=\"368.582\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"255.921\" y1=\"361.93\" x2=\"256.547\" y2=\"367.898\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"267.472\" y1=\"360.062\" x2=\"268.719\" y2=\"365.932\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"278.765\" y1=\"356.996\" x2=\"280.619\" y2=\"362.703\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"289.675\" y1=\"352.767\" x2=\"292.116\" y2=\"358.248\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"300.083\" y1=\"347.42\" x2=\"303.083\" y2=\"352.616\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"309.876\" y1=\"341.015\" x2=\"313.403\" y2=\"345.869\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"318.946\" y1=\"333.621\" x2=\"322.96\" y2=\"338.08\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"327.193\" y1=\"325.319\" x2=\"331.651\" y2=\"329.334\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"334.527\" y1=\"316.201\" x2=\"339.38\" y2=\"319.728\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"340.868\" y1=\"306.367\" x2=\"346.063\" y2=\"309.367\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"346.146\" y1=\"295.924\" x2=\"351.626\" y2=\"298.364\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"350.303\" y1=\"284.986\" x2=\"356.008\" y2=\"286.84\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"353.294\" y1=\"273.673\" x2=\"359.162\" y2=\"274.92\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"355.087\" y1=\"262.11\" x2=\"361.052\" y2=\"262.737\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"356\" y1=\"250.5\" x2=\"362\" y2=\"250.5\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"355.355\" y1=\"238.781\" x2=\"361.323\" y2=\"238.153\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"353.489\" y1=\"227.193\" x2=\"359.359\" y2=\"225.945\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"350.422\" y1=\"215.864\" x2=\"356.129\" y2=\"214.01\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"346.188\" y1=\"204.918\" x2=\"351.669\" y2=\"202.477\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"340.833\" y1=\"194.474\" x2=\"346.029\" y2=\"191.474\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"334.415\" y1=\"184.647\" x2=\"339.269\" y2=\"181.12\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"327.004\" y1=\"175.545\" x2=\"331.463\" y2=\"171.529\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"318.684\" y1=\"167.268\" x2=\"322.699\" y2=\"162.807\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"309.543\" y1=\"159.905\" x2=\"313.07\" y2=\"155.049\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"299.684\" y1=\"153.538\" x2=\"302.683\" y2=\"148.34\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"289.212\" y1=\"148.237\" x2=\"291.652\" y2=\"142.753\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"278.245\" y1=\"144.059\" x2=\"280.097\" y2=\"138.351\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"266.9\" y1=\"141.05\" x2=\"268.145\" y2=\"135.179\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"255.302\" y1=\"139.244\" x2=\"255.927\" y2=\"133.275\" />\n              <polygon fill=\"#3F3F3F\" points=\"247.391,133 243.5,141.05 239.609,133       \" />\n              <polygon fill=\"#3F3F3F\" points=\"188.022,147.021 188.677,155.938 181.283,150.912    \" />\n              <polygon fill=\"#3F3F3F\" points=\"143.617,188.848 148.643,196.243 139.726,195.588    \" />\n              <polygon fill=\"#3F3F3F\" points=\"126.074,247.273 134.125,251.165 126.076,255.056    \" />\n              <polygon fill=\"#3F3F3F\" points=\"140.095,306.644 149.013,305.988 143.988,313.382    \" />\n              <polygon fill=\"#3F3F3F\" points=\"181.922,351.049 189.318,346.022 188.663,354.938    \" />\n              <polygon fill=\"#3F3F3F\" points=\"240.349,368.591 244.24,360.54 248.13,368.589       \" />\n              <polygon fill=\"#3F3F3F\" points=\"299.718,354.569 299.062,345.652 306.457,350.677    \" />\n              <polygon fill=\"#3F3F3F\" points=\"344.123,312.742 339.096,305.348 348.012,306.002    \" />\n              <polygon fill=\"#3F3F3F\" points=\"362,254.316 353.951,250.426 362,246.534    \" />\n              <polygon fill=\"#3F3F3F\" points=\"347.934,194.779 339.018,195.435 344.042,188.04     \" />\n              <polygon fill=\"#3F3F3F\" points=\"305.984,150.252 298.59,155.277 299.244,146.361     \" />\n              <rect x=\"282\" y=\"152.98\" fill=\"none\" width=\"17.366\" height=\"27.947\" />\n              <text transform=\"matrix(1 0 0 1 282 174.4307)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">1</text>\n              <rect x=\"320.699\" y=\"188.474\" fill=\"none\" width=\"17.202\" height=\"26.267\" />\n              <text transform=\"matrix(1 0 0 1 320.6987 209.9229)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">2</text>\n              <rect x=\"335.04\" y=\"238.872\" fill=\"none\" width=\"21.03\" height=\"24.585\" />\n              <text transform=\"matrix(1 0 0 1 335.0396 260.3213)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">3</text>\n              <rect x=\"319.699\" y=\"290.242\" fill=\"none\" width=\"17.202\" height=\"23.557\" />\n              <text transform=\"matrix(1 0 0 1 319.6987 311.6914)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">4</text>\n              <rect x=\"284.5\" y=\"323.319\" fill=\"none\" width=\"19.212\" height=\"22.511\" />\n              <text transform=\"matrix(1 0 0 1 284.5 344.7695)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">5</text>\n              <rect x=\"235.552\" y=\"336.08\" fill=\"none\" width=\"19.938\" height=\"24.15\" />\n              <text transform=\"matrix(1 0 0 1 235.5522 357.5293)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">6</text>\n              <rect x=\"189.373\" y=\"322.319\" fill=\"none\" width=\"19.673\" height=\"25.003\" />\n              <text transform=\"matrix(1 0 0 1 189.3726 343.7695)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">7</text>\n              <rect x=\"151.066\" y=\"287.539\" fill=\"none\" width=\"17.726\" height=\"25.203\" />\n              <text transform=\"matrix(1 0 0 1 151.0664 308.9883)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">8</text>\n              <rect x=\"136.392\" y=\"241.25\" fill=\"none\" width=\"20.696\" height=\"22.348\" />\n              <text transform=\"matrix(1 0 0 1 136.3916 262.6992)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">9</text>\n              <rect x=\"149.066\" y=\"191.474\" fill=\"none\" width=\"36.554\" height=\"27.122\" />\n              <text transform=\"matrix(1 0 0 1 149.0664 212.9229)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">10</text>\n              <rect x=\"184.967\" y=\"158.518\" fill=\"none\" width=\"36.021\" height=\"27.13\" />\n              <text transform=\"matrix(1 0 0 1 184.9673 179.9668)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">11</text>\n              <rect x=\"225.723\" y=\"144.514\" fill=\"none\" width=\"37.029\" height=\"29.25\" />\n              <text transform=\"matrix(1 0 0 1 225.7227 165.9639)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">12</text>\n            </g>\n            <path id=\"hours\" fill=\"#3A3A3A\" d=\"M242.515,270.21c-0.44,0-0.856-0.355-0.926-0.79l-3.156-19.811c-0.069-0.435-0.103-1.149-0.074-1.588\n        l4.038-62.009c0.03-0.439,0.414-0.798,0.854-0.798h0.5c0.44,0,0.823,0.359,0.852,0.798l4.042,62.205\n        c0.028,0.439-0.015,1.152-0.097,1.584l-3.712,19.623c-0.082,0.433-0.508,0.786-0.948,0.786H242.515z\" />\n            <path id=\"minutes\" fill=\"#3A3A3A\" d=\"M247.862,249.75l-2.866,24.244c-0.099,1.198-0.498,2.18-1.497,2.179c-0.999,0-1.397-0.98-1.498-2.179\n                        l-2.861-24.508c-0.099-1.199,3.479-93.985,3.479-93.985c0.036-1.201-0.117-2.183,0.881-2.183c0.999,0,0.847,0.982,0.882,2.183\n                        L247.862,249.75z\" />\n            <g id=\"seconds\">\n              <line fill=\"none\" stroke=\"#BF4116\" stroke-miterlimit=\"10\" x1=\"243.5\" y1=\"143\" x2=\"243.5\" y2=\"266\" />\n              <circle fill=\"none\" stroke=\"#BF4116\" stroke-miterlimit=\"10\" cx=\"243.5\" cy=\"271\" r=\"5\" />\n              <circle fill=\"#BF4116\" cx=\"243.5\" cy=\"251\" r=\"3.917\" />\n            </g>\n          </svg>\n\n          <script type=\"text/javascript\">\n            analogClock(\"dashclock\", \"\");\n\n          </script>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["analogclock"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
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

    return "<svg version=\"1.1\" id=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 23
          },
          "end": {
            "line": 1,
            "column": 29
          }
        }
      }) : helper))) +
      "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"94.257 101.184 358 401.184\" enable-background=\"new 94.257 101.184 394.257 401.184\" xml:space=\"preserve\">\n  <circle id=\"face\" fill=\"#F4F3ED\" cx=\"243.869\" cy=\"250.796\" r=\"130.8\" />\n  <path id=\"rim\" fill=\"#383838\" d=\"M243.869,101.184c-82.629,0-149.612,66.984-149.612,149.612c0,82.629,66.983,149.612,149.612,149.612\n	S393.48,333.425,393.48,250.796S326.498,101.184,243.869,101.184z M243.869,386.455c-74.922,0-135.659-60.736-135.659-135.659\n	c0-74.922,60.737-135.659,135.659-135.659c74.922,0,135.658,60.737,135.658,135.659\n	C379.527,325.719,318.791,386.455,243.869,386.455z\" />\n  <g id=\"inner\">\n    <g opacity=\"0.2\">\n      <path fill=\"#C4C4C4\" d=\"M243.869,114.648c-75.748,0-137.154,61.406-137.154,137.153c0,75.749,61.406,137.154,137.154,137.154\n			c75.748,0,137.153-61.405,137.153-137.154C381.022,176.054,319.617,114.648,243.869,114.648z M243.869,382.56\n			c-72.216,0-130.758-58.543-130.758-130.758s58.542-130.758,130.758-130.758c72.216,0,130.758,58.543,130.758,130.758\n			S316.085,382.56,243.869,382.56z\" />\n    </g>\n    <g>\n      <path fill=\"#282828\" d=\"M243.869,113.637c-75.748,0-137.154,61.406-137.154,137.153c0,75.749,61.406,137.154,137.154,137.154\n			c75.748,0,137.153-61.405,137.153-137.154C381.022,175.043,319.617,113.637,243.869,113.637z M243.869,381.548\n			c-72.216,0-130.758-58.542-130.758-130.757c0-72.216,58.542-130.758,130.758-130.758c72.216,0,130.758,58.543,130.758,130.758\n			C374.627,323.005,316.085,381.548,243.869,381.548z\" />\n    </g>\n  </g>\n  <g id=\"markings\">\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"243.5\" y1=\"139\" x2=\"243.5\" y2=\"133\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"231.817\" y1=\"139.651\" x2=\"231.19\" y2=\"133.684\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"220.266\" y1=\"141.52\" x2=\"219.018\" y2=\"135.65\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"208.973\" y1=\"144.585\" x2=\"207.119\" y2=\"138.879\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"198.063\" y1=\"148.814\" x2=\"195.623\" y2=\"143.333\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"187.655\" y1=\"154.161\" x2=\"184.655\" y2=\"148.965\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"177.862\" y1=\"160.566\" x2=\"174.335\" y2=\"155.712\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"168.792\" y1=\"167.96\" x2=\"164.778\" y2=\"163.501\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"160.545\" y1=\"176.262\" x2=\"156.087\" y2=\"172.246\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"153.211\" y1=\"185.379\" x2=\"148.358\" y2=\"181.852\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"146.871\" y1=\"195.214\" x2=\"141.675\" y2=\"192.213\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"141.593\" y1=\"205.658\" x2=\"136.112\" y2=\"203.216\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"137.436\" y1=\"216.596\" x2=\"131.729\" y2=\"214.741\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"134.445\" y1=\"227.909\" x2=\"128.576\" y2=\"226.66\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.653\" y1=\"239.472\" x2=\"126.685\" y2=\"238.843\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.079\" y1=\"251.16\" x2=\"126.079\" y2=\"251.158\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.73\" y1=\"262.843\" x2=\"126.762\" y2=\"263.468\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"134.598\" y1=\"274.395\" x2=\"128.729\" y2=\"275.64\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"137.664\" y1=\"285.688\" x2=\"131.958\" y2=\"287.539\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"141.893\" y1=\"296.598\" x2=\"136.412\" y2=\"299.035\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"147.24\" y1=\"307.006\" x2=\"142.043\" y2=\"310.004\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"153.645\" y1=\"316.799\" x2=\"148.791\" y2=\"320.323\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"161.04\" y1=\"325.868\" x2=\"156.58\" y2=\"329.881\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"169.341\" y1=\"334.115\" x2=\"165.325\" y2=\"338.572\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"178.459\" y1=\"341.449\" x2=\"174.931\" y2=\"346.302\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"188.294\" y1=\"347.789\" x2=\"185.292\" y2=\"352.984\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"198.738\" y1=\"353.066\" x2=\"196.295\" y2=\"358.548\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"209.676\" y1=\"357.223\" x2=\"207.82\" y2=\"362.93\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"220.989\" y1=\"360.214\" x2=\"219.739\" y2=\"366.084\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"232.552\" y1=\"362.006\" x2=\"231.922\" y2=\"367.975\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"244.239\" y1=\"362.58\" x2=\"244.237\" y2=\"368.582\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"255.921\" y1=\"361.93\" x2=\"256.547\" y2=\"367.898\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"267.472\" y1=\"360.062\" x2=\"268.719\" y2=\"365.932\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"278.765\" y1=\"356.996\" x2=\"280.619\" y2=\"362.703\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"289.675\" y1=\"352.767\" x2=\"292.116\" y2=\"358.248\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"300.083\" y1=\"347.42\" x2=\"303.083\" y2=\"352.616\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"309.876\" y1=\"341.015\" x2=\"313.403\" y2=\"345.869\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"318.946\" y1=\"333.621\" x2=\"322.96\" y2=\"338.08\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"327.193\" y1=\"325.319\" x2=\"331.651\" y2=\"329.334\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"334.527\" y1=\"316.201\" x2=\"339.38\" y2=\"319.728\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"340.868\" y1=\"306.367\" x2=\"346.063\" y2=\"309.367\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"346.146\" y1=\"295.924\" x2=\"351.626\" y2=\"298.364\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"350.303\" y1=\"284.986\" x2=\"356.008\" y2=\"286.84\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"353.294\" y1=\"273.673\" x2=\"359.162\" y2=\"274.92\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"355.087\" y1=\"262.11\" x2=\"361.052\" y2=\"262.737\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"356\" y1=\"250.5\" x2=\"362\" y2=\"250.5\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"355.355\" y1=\"238.781\" x2=\"361.323\" y2=\"238.153\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"353.489\" y1=\"227.193\" x2=\"359.359\" y2=\"225.945\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"350.422\" y1=\"215.864\" x2=\"356.129\" y2=\"214.01\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"346.188\" y1=\"204.918\" x2=\"351.669\" y2=\"202.477\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"340.833\" y1=\"194.474\" x2=\"346.029\" y2=\"191.474\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"334.415\" y1=\"184.647\" x2=\"339.269\" y2=\"181.12\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"327.004\" y1=\"175.545\" x2=\"331.463\" y2=\"171.529\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"318.684\" y1=\"167.268\" x2=\"322.699\" y2=\"162.807\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"309.543\" y1=\"159.905\" x2=\"313.07\" y2=\"155.049\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"299.684\" y1=\"153.538\" x2=\"302.683\" y2=\"148.34\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"289.212\" y1=\"148.237\" x2=\"291.652\" y2=\"142.753\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"278.245\" y1=\"144.059\" x2=\"280.097\" y2=\"138.351\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"266.9\" y1=\"141.05\" x2=\"268.145\" y2=\"135.179\" />\n    <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"255.302\" y1=\"139.244\" x2=\"255.927\" y2=\"133.275\" />\n    <polygon fill=\"#3F3F3F\" points=\"247.391,133 243.5,141.05 239.609,133 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"188.022,147.021 188.677,155.938 181.283,150.912 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"143.617,188.848 148.643,196.243 139.726,195.588 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"126.074,247.273 134.125,251.165 126.076,255.056 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"140.095,306.644 149.013,305.988 143.988,313.382 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"181.922,351.049 189.318,346.022 188.663,354.938 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"240.349,368.591 244.24,360.54 248.13,368.589 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"299.718,354.569 299.062,345.652 306.457,350.677 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"344.123,312.742 339.096,305.348 348.012,306.002 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"362,254.316 353.951,250.426 362,246.534 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"347.934,194.779 339.018,195.435 344.042,188.04 	\" />\n    <polygon fill=\"#3F3F3F\" points=\"305.984,150.252 298.59,155.277 299.244,146.361 	\" />\n    <rect x=\"282\" y=\"152.98\" fill=\"none\" width=\"17.366\" height=\"27.947\" />\n    <text transform=\"matrix(1 0 0 1 282 174.4307)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">1</text>\n    <rect x=\"320.699\" y=\"188.474\" fill=\"none\" width=\"17.202\" height=\"26.267\" />\n    <text transform=\"matrix(1 0 0 1 320.6987 209.9229)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">2</text>\n    <rect x=\"335.04\" y=\"238.872\" fill=\"none\" width=\"21.03\" height=\"24.585\" />\n    <text transform=\"matrix(1 0 0 1 335.0396 260.3213)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">3</text>\n    <rect x=\"319.699\" y=\"290.242\" fill=\"none\" width=\"17.202\" height=\"23.557\" />\n    <text transform=\"matrix(1 0 0 1 319.6987 311.6914)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">4</text>\n    <rect x=\"284.5\" y=\"323.319\" fill=\"none\" width=\"19.212\" height=\"22.511\" />\n    <text transform=\"matrix(1 0 0 1 284.5 344.7695)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">5</text>\n    <rect x=\"235.552\" y=\"336.08\" fill=\"none\" width=\"19.938\" height=\"24.15\" />\n    <text transform=\"matrix(1 0 0 1 235.5522 357.5293)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">6</text>\n    <rect x=\"189.373\" y=\"322.319\" fill=\"none\" width=\"19.673\" height=\"25.003\" />\n    <text transform=\"matrix(1 0 0 1 189.3726 343.7695)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">7</text>\n    <rect x=\"151.066\" y=\"287.539\" fill=\"none\" width=\"17.726\" height=\"25.203\" />\n    <text transform=\"matrix(1 0 0 1 151.0664 308.9883)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">8</text>\n    <rect x=\"136.392\" y=\"241.25\" fill=\"none\" width=\"20.696\" height=\"22.348\" />\n    <text transform=\"matrix(1 0 0 1 136.3916 262.6992)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">9</text>\n    <rect x=\"149.066\" y=\"191.474\" fill=\"none\" width=\"36.554\" height=\"27.122\" />\n    <text transform=\"matrix(1 0 0 1 149.0664 212.9229)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">10</text>\n    <rect x=\"184.967\" y=\"158.518\" fill=\"none\" width=\"36.021\" height=\"27.13\" />\n    <text transform=\"matrix(1 0 0 1 184.9673 179.9668)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">11</text>\n    <rect x=\"225.723\" y=\"144.514\" fill=\"none\" width=\"37.029\" height=\"29.25\" />\n    <text transform=\"matrix(1 0 0 1 225.7227 165.9639)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">12</text>\n  </g>\n  <path id=\"hours\" fill=\"#3A3A3A\" d=\"M242.515,270.21c-0.44,0-0.856-0.355-0.926-0.79l-3.156-19.811c-0.069-0.435-0.103-1.149-0.074-1.588\n	l4.038-62.009c0.03-0.439,0.414-0.798,0.854-0.798h0.5c0.44,0,0.823,0.359,0.852,0.798l4.042,62.205\n	c0.028,0.439-0.015,1.152-0.097,1.584l-3.712,19.623c-0.082,0.433-0.508,0.786-0.948,0.786H242.515z\" />\n  <path id=\"minutes\" fill=\"#3A3A3A\" d=\"M247.862,249.75l-2.866,24.244c-0.099,1.198-0.498,2.18-1.497,2.179c-0.999,0-1.397-0.98-1.498-2.179\n			l-2.861-24.508c-0.099-1.199,3.479-93.985,3.479-93.985c0.036-1.201-0.117-2.183,0.881-2.183c0.999,0,0.847,0.982,0.882,2.183\n			L247.862,249.75z\" />\n  <g id=\"seconds\">\n    <line fill=\"none\" stroke=\"#BF4116\" stroke-miterlimit=\"10\" x1=\"243.5\" y1=\"143\" x2=\"243.5\" y2=\"266\" />\n    <circle fill=\"none\" stroke=\"#BF4116\" stroke-miterlimit=\"10\" cx=\"243.5\" cy=\"271\" r=\"5\" />\n    <circle fill=\"#BF4116\" cx=\"243.5\" cy=\"251\" r=\"3.917\" />\n  </g>\n</svg>\n\n<script type=\"text/javascript\">\n  analogClock(\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 133,
            "column": 15
          },
          "end": {
            "line": 133,
            "column": 21
          }
        }
      }) : helper))) +
      "\", \"" +
      alias4(((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "tz",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 133,
            "column": 25
          },
          "end": {
            "line": 133,
            "column": 31
          }
        }
      }) : helper))) +
      "\");\n\n</script>\n";
  },
  "useData": true
});
this["app"]["templates"]["bookmarkslist"] = Handlebars.template({
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

    return "        <tr>\n          <td style=\"width:105px;height:65px;\">\n            " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "preview_image_url") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(2, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 12
          },
          "end": {
            "line": 5,
            "column": 120
          }
        }
      })) != null ? stack1 : "") +
      "\n          </td>\n          <td>\n            <a href=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "url") || (depth0 != null ? lookupProperty(depth0, "url") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "url",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 21
          },
          "end": {
            "line": 8,
            "column": 28
          }
        }
      }) : helper))) +
      "\" target=\"_new\">" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "favicon_url") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(4, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 44
          },
          "end": {
            "line": 8,
            "column": 154
          }
        }
      })) != null ? stack1 : "") +
      " " +
      alias4(((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 155
          },
          "end": {
            "line": 8,
            "column": 164
          }
        }
      }) : helper))) +
      "</a><br />\n            " +
      alias4(((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "description",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 9,
            "column": 12
          },
          "end": {
            "line": 9,
            "column": 27
          }
        }
      }) : helper))) +
      "\n          </td>\n        </tr>\n";
  },
  "2": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<img src=\"" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "preview_image_url") || (depth0 != null ? lookupProperty(depth0, "preview_image_url") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "preview_image_url",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 47
          },
          "end": {
            "line": 5,
            "column": 68
          }
        }
      }) : helper))) +
      "\" style=\"max-height:60px;max-width:100px;\" />";
  },
  "4": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<img src=\"" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "favicon_url") || (depth0 != null ? lookupProperty(depth0, "favicon_url") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "favicon_url",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 73
          },
          "end": {
            "line": 8,
            "column": 88
          }
        }
      }) : helper))) +
      "\" style=\"border: none;max-height: 16px;max-width:16px;\" />";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "    <table border=\"0\" cellpadding=\"5\" cellspacing=\"0\">\n" +
      ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 6
          },
          "end": {
            "line": 12,
            "column": 15
          }
        }
      })) != null ? stack1 : "") +
      "    </table>\n";
  },
  "useData": true
});
this["app"]["templates"]["containerinfo"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "\n" +
      ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), ((stack1 = (depth0 != null ? lookupProperty(depth0, "updateStatus") : depth0)) != null ? lookupProperty(stack1, "updateAvailable") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(2, data, 0),
        "inverse": container.program(4, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 20,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 77
          }
        }
      })) != null ? stack1 : "") +
      "\n";
  },
  "2": function(container, depth0, helpers, partials, data) {
    return "Update Available";
  },
  "4": function(container, depth0, helpers, partials, data) {
    return "Up-to-date";
  },
  "6": function(container, depth0, helpers, partials, data) {
    return "Unknown";
  },
  "8": function(container, depth0, helpers, partials, data) {
    return "Yes";
  },
  "10": function(container, depth0, helpers, partials, data) {
    return "No";
  },
  "12": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "          <button onclick=\"composeEdit(this); return false;\" data-containerid=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Name") : stack1), depth0)) +
      "\" data-project=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "definition") : depth0)) != null ? lookupProperty(stack1, "project") : stack1), depth0)) +
      "\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa-regular fa-pen-to-square\"></i> Edit</button>\n";
  },
  "14": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "          <button onclick=\"composeEdit(this); return false;\" data-containerid=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Name") : stack1), depth0)) +
      "\" data-project=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "definition") : depth0)) != null ? lookupProperty(stack1, "project") : stack1), depth0)) +
      "\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa-regular fa-square-plus\"></i> Edit</button>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "      <div class=\"modal-body\">\n\n        <div style=\"text-align:center;margin-top:5px\" class=\"card\">\n          <img class=\"card-img-top\" style=\"padding:5px;width:10rem;height:10rem;\" src=\"/api/icons/r/" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "definition") : depth0)) != null ? lookupProperty(stack1, "iconCatalog") : stack1), depth0)) +
      "/" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "definition") : depth0)) != null ? lookupProperty(stack1, "iconSlug") : stack1), depth0)) +
      "/resource\" />\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">\n          <table border=\"0\" cellpadding=\"2\" cellspacing=\"0\">\n            <tr>\n              <td>Hostname:</td>\n              <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Config") : stack1)) != null ? lookupProperty(stack1, "Hostname") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Image:</td>\n              <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Config") : stack1)) != null ? lookupProperty(stack1, "Image") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Updatable:</td>\n              <td>" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, (depth0 != null ? lookupProperty(depth0, "updateStatus") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(6, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 19,
            "column": 18
          },
          "end": {
            "line": 21,
            "column": 22
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n            </tr>\n            <tr>\n              <td>Created:</td>\n              <td>" +
      alias2((lookupProperty(helpers, "format") || (depth0 && lookupProperty(depth0, "format")) || container.hooks.helperMissing).call(alias3, "datetime", ((stack1 = (depth0 != null ? lookupProperty(depth0, "definition") : depth0)) != null ? lookupProperty(stack1, "created") : stack1), {
        "name": "format",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 18
          },
          "end": {
            "line": 25,
            "column": 59
          }
        }
      })) +
      "</td>\n            </tr>\n            <tr>\n              <td>Available:</td>\n              <td>" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, (depth0 != null ? lookupProperty(depth0, "available") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(8, data, 0),
        "inverse": container.program(10, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 29,
            "column": 18
          },
          "end": {
            "line": 29,
            "column": 55
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n            </tr>\n            <tr>\n              <td>Status:</td>\n              <td>" +
      alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "State") : stack1)) != null ? lookupProperty(stack1, "Status") : stack1), depth0)) +
      "</td>\n            </tr>\n            <tr>\n              <td>Health:</td>\n              <td>" +
      alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "State") : stack1)) != null ? lookupProperty(stack1, "Health") : stack1)) != null ? lookupProperty(stack1, "Status") : stack1), depth0)) +
      "</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-containerid=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Name") : stack1), depth0)) +
      "\" data-command=\"container-stop\">Stop</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-containerid=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Name") : stack1), depth0)) +
      "\" data-command=\"container-start\">Start</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-containerid=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "container") : depth0)) != null ? lookupProperty(stack1, "Name") : stack1), depth0)) +
      "\" data-command=\"container-restart\">Restart</button>\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "editor") : depth0)) != null ? lookupProperty(stack1, "editable") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(12, data, 0),
        "inverse": container.program(14, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 46,
            "column": 8
          },
          "end": {
            "line": 50,
            "column": 15
          }
        }
      })) != null ? stack1 : "") +
      "        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n";
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

    return "         <tr class=\"nowrap\">\n           <td>\n             <a title=\"Navigate to\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "publicUrl") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(2, data, 0),
        "inverse": container.program(4, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 20,
            "column": 36
          },
          "end": {
            "line": 20,
            "column": 196
          }
        }
      })) != null ? stack1 : "") +
      "><i class=\"fa-solid fa-link\"></i></a>\n             <a title=\"Export\" href=\"#\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 21,
            "column": 58
          },
          "end": {
            "line": 21,
            "column": 66
          }
        }
      }) : helper))) +
      "\" onclick=\"exportContainer(this); return false;\" class=\"btn btn-outline-secondary btn-sm\"><i class=\"fa-solid fa-file-export\"></i></a>\n             <a title=\"Edit container\" href=\"#\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 22,
            "column": 66
          },
          "end": {
            "line": 22,
            "column": 74
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
            "column": 90
          },
          "end": {
            "line": 22,
            "column": 101
          }
        }
      }) : helper))) +
      "\" onclick=\"composeEdit(this, 1); return false;\" class=\"btn btn-outline-secondary btn-sm\"><i class=\"fa-regular fa-pen-to-square\"></i></a>\n             <a title=\"Update available\" href=\"#\" data-imageid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "image") || (depth0 != null ? lookupProperty(depth0, "image") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "image",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 23,
            "column": 64
          },
          "end": {
            "line": 23,
            "column": 73
          }
        }
      }) : helper))) +
      "\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 23,
            "column": 93
          },
          "end": {
            "line": 23,
            "column": 101
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
            "line": 23,
            "column": 117
          },
          "end": {
            "line": 23,
            "column": 128
          }
        }
      }) : helper))) +
      "\" onclick=\"\" class=\"btn btn-outline-secondary btn-sm updatecheck\"><i class=\"fa-regular fa-circle-question\"></i></a>\n           </td>\n           <td>\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "configured") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(6, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 26,
            "column": 13
          },
          "end": {
            "line": 30,
            "column": 20
          }
        }
      })) != null ? stack1 : "") +
      "           </td>\n\n           <td align=\"center\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(9, data, 0),
        "inverse": container.program(11, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 33,
            "column": 30
          },
          "end": {
            "line": 33,
            "column": 89
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
            "line": 33,
            "column": 100
          },
          "end": {
            "line": 33,
            "column": 112
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
            "line": 33,
            "column": 146
          },
          "end": {
            "line": 33,
            "column": 156
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
            "line": 33,
            "column": 173
          },
          "end": {
            "line": 33,
            "column": 183
          }
        }
      }) : helper))) +
      "\"></i>\n           </td>\n           <td " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(13, data, 0),
        "inverse": container.program(11, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 35,
            "column": 15
          },
          "end": {
            "line": 35,
            "column": 117
          }
        }
      })) != null ? stack1 : "") +
      ">\n             " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "shutdown") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(16, data, 0),
        "inverse": container.program(18, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 36,
            "column": 13
          },
          "end": {
            "line": 36,
            "column": 69
          }
        }
      })) != null ? stack1 : "") +
      "\n           </td>\n           <td " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(9, data, 0),
        "inverse": container.program(11, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 38,
            "column": 15
          },
          "end": {
            "line": 38,
            "column": 74
          }
        }
      })) != null ? stack1 : "") +
      ">" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "shutdown") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(16, data, 0),
        "inverse": container.program(20, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 38,
            "column": 75
          },
          "end": {
            "line": 38,
            "column": 131
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n           <td " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(22, data, 0),
        "inverse": container.program(11, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 39,
            "column": 15
          },
          "end": {
            "line": 39,
            "column": 120
          }
        }
      })) != null ? stack1 : "") +
      ">" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "shutdown") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(16, data, 0),
        "inverse": container.program(24, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 39,
            "column": 121
          },
          "end": {
            "line": 39,
            "column": 183
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n           <td>" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "uptime") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(26, data, 0),
        "inverse": container.program(28, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 40,
            "column": 15
          },
          "end": {
            "line": 40,
            "column": 107
          }
        }
      })) != null ? stack1 : "") +
      "</td>\n         </tr>\n";
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
            "column": 59
          },
          "end": {
            "line": 20,
            "column": 72
          }
        }
      }) : helper))) +
      "\" target=\"_new\" class=\"btn btn-outline-secondary btn-sm\" ";
  },
  "4": function(container, depth0, helpers, partials, data) {
    return " class=\"btn btn-outline-secondary btn-sm  disabled\" ";
  },
  "6": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "               <span class=\"text-info\">" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 27,
            "column": 39
          },
          "end": {
            "line": 27,
            "column": 47
          }
        }
      }) : helper))) +
      "</span>\n";
  },
  "8": function(container, depth0, helpers, partials, data) {
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

    return "               <a title=\"View properties\" href=\"#\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 29,
            "column": 69
          },
          "end": {
            "line": 29,
            "column": 77
          }
        }
      }) : helper))) +
      "\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "healthy") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(9, data, 0),
        "inverse": container.program(11, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 29,
            "column": 79
          },
          "end": {
            "line": 29,
            "column": 138
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
            "line": 29,
            "column": 183
          },
          "end": {
            "line": 29,
            "column": 191
          }
        }
      }) : helper))) +
      "</a>\n";
  },
  "9": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "11": function(container, depth0, helpers, partials, data) {
    return "class=\"text-danger-emphasis\" ";
  },
  "13": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "cpuAlert") : depth0), {
      "name": "if",
      "hash": {},
      "fn": container.program(14, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 35,
          "column": 30
        },
        "end": {
          "line": 35,
          "column": 73
        }
      }
    })) != null ? stack1 : "");
  },
  "14": function(container, depth0, helpers, partials, data) {
    return "class=\"text-danger\" ";
  },
  "16": function(container, depth0, helpers, partials, data) {
    return "-";
  },
  "18": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "stats") : depth0)) != null ? lookupProperty(stack1, "cpuPercentStr") : stack1), depth0));
  },
  "20": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "stats") : depth0)) != null ? lookupProperty(stack1, "memoryUsageStr") : stack1), depth0));
  },
  "22": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "memoryAlert") : depth0), {
      "name": "if",
      "hash": {},
      "fn": container.program(14, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 39,
          "column": 30
        },
        "end": {
          "line": 39,
          "column": 76
        }
      }
    })) != null ? stack1 : "");
  },
  "24": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "stats") : depth0)) != null ? lookupProperty(stack1, "memoryFreePercentStr") : stack1), depth0));
  },
  "26": function(container, depth0, helpers, partials, data) {
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

    return "<span class=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "colorLevel") || (depth0 != null ? lookupProperty(depth0, "colorLevel") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "colorLevel",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 40,
            "column": 42
          },
          "end": {
            "line": 40,
            "column": 56
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
            "line": 40,
            "column": 58
          },
          "end": {
            "line": 40,
            "column": 82
          }
        }
      }) : helper))) +
      "</span>";
  },
  "28": function(container, depth0, helpers, partials, data) {
    return "n/a";
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

    return " <div class=\"table-responsive\">\n   <table id=\"dockerps\" class=\"datatable table table-striped table-sm table-hover align-middle table-nowrap\">\n     <caption>" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "now") || (depth0 != null ? lookupProperty(depth0, "now") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(alias1, {
        "name": "now",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 14
          },
          "end": {
            "line": 3,
            "column": 21
          }
        }
      }) : helper))) +
      "\n       <caption>\n       <thead>\n     <tr>\n       <th></th>\n       <th>Name</th>\n       <th>State</th>\n       <th>CPU</th>\n       <th>Memory</th>\n       <th>% Free</th>\n       <th>Uptime</th>\n     </tr>\n     </thead>\n     <tbody>\n" +
      ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0, {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 17,
            "column": 7
          },
          "end": {
            "line": 42,
            "column": 18
          }
        }
      })) != null ? stack1 : "") +
      "     </tbody>\n     <tfoot>\n     </tfoot>\n   </table>\n </div>\n";
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

    return "<nav class=\"navbar navbar-expand-lg sticky-top bg-brand\" style=\"background-color: #6f42c1 !important;color: white !important;\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"/admin/index\"><img width=\"38px\" height=38px\" src=\"/assets/img/logo.png\" />&nbsp; DiscovrNinja!</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"/admin/index\"><i class=\"fa-solid fa-house\"></i> Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/\"><i class=\"fa-solid fa-desktop\"></i> Desktop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/admin/catalog\"><i class=\"fa-solid fa-book\"></i> Catalog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/admin/system\"><i class=\"fa-brands fa-docker\"></i> System</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fa-solid fa-screwdriver-wrench\"></i> Tools\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <hr class=\"dropdown-divider\">\n            </li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"composerise(); return false;\"><i class=\"fa-solid fa-box\"></i> Composerise</a></li>\n            <li><a class=\"dropdown-item\" href=\"/admin/storage\"><i class=\"fa-solid fa-floppy-disk\"></i> Volumes</a></li>\n            <li><a class=\"dropdown-item\" href=\"/admin/network\"><i class=\"fa-solid fa-network-wired\"></i> Networks</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-item\">\n" +
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
this["app"]["templates"]["headerwide"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<nav class=\"navbar navbar-expand-lg sticky-top bg-brand\" style=\"background-color: #6f42c1 !important;color: white !important;\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"/admin/index\"><img width=\"38px\" height=38px\" src=\"/assets/img/logo.png\" />&nbsp; DiscovrNinja!</a>\n\n    <ul class=\"nav nav-pills nav-right\">\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" aria-current=\"page\" href=\"/admin/index\"><i class=\"fa-solid fa-house\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" href=\"/\"><i class=\"fa-solid fa-desktop\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" href=\"/admin/catalog\"><i class=\"fa-solid fa-book\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" href=\"#\" onclick=\"composerise(); return false;\"><i class=\"fa-solid fa-box\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" href=\"/admin/storage\"><i class=\"fa-solid fa-floppy-disk\"></i></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" href=\"/admin/network\"><i class=\"fa-solid fa-network-wired\"></i></a>\n      </li>\n      <li class=\"nav-iten\">\n        <a class=\"btn nav-link toolbar-item\" href=\"/admin/system\"><i class=\"fa-brands fa-docker\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link toolbar-item\" href=\"/auth/logout\"><i class=\"fa-solid fa-power-off\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n" +
      ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
        "name": "themechooser",
        "data": data,
        "indent": "        ",
        "helpers": helpers,
        "partials": partials,
        "decorators": container.decorators
      })) != null ? stack1 : "") +
      "      </li>\n    </ul>\n  </div>\n</nav>\n";
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
this["app"]["templates"]["modalanalogclock"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return " - " +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "tz",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 109
          },
          "end": {
            "line": 5,
            "column": 115
          }
        }
      }) : helper)));
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
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

    return "<div class=\"modal fade\" style=\"z-index:6000 !important;\" id=\"analogClockModal" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 77
          },
          "end": {
            "line": 1,
            "column": 83
          }
        }
      }) : helper))) +
      "\" tabindex=\"-1\" aria-labelledby=\"analogClockModalLabel" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 137
          },
          "end": {
            "line": 1,
            "column": 143
          }
        }
      }) : helper))) +
      "\" aria-hidden=\"true\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\">\n  <div class=\"modal-dialog modal-fullscreen\">\n    <div class=\"modal-content\" style=\"opacity:1 !important;z-index:6000 !important;\">\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title fs-5\" id=\"analogClockModalLabel{id}}\">Current time " +
      ((stack1 = (lookupProperty(helpers, "when") || (depth0 && lookupProperty(depth0, "when")) || alias2).call(alias1, (depth0 != null ? lookupProperty(depth0, "tz") : depth0), "noteq", "", {
        "name": "when",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 82
          },
          "end": {
            "line": 5,
            "column": 124
          }
        }
      })) != null ? stack1 : "") +
      "</h1>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <div style=\"width:90%;height:90%;\">\n          <svg version=\"1.1\" id=\"modal" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 10,
            "column": 38
          },
          "end": {
            "line": 10,
            "column": 44
          }
        }
      }) : helper))) +
      "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"94.257 101.184 358 401.184\" enable-background=\"new 94.257 101.184 394.257 401.184\" xml:space=\"preserve\">\n            <circle id=\"face\" fill=\"#F4F3ED\" cx=\"243.869\" cy=\"250.796\" r=\"130.8\" />\n            <path id=\"rim\" fill=\"#383838\" d=\"M243.869,101.184c-82.629,0-149.612,66.984-149.612,149.612c0,82.629,66.983,149.612,149.612,149.612\n	S393.48,333.425,393.48,250.796S326.498,101.184,243.869,101.184z M243.869,386.455c-74.922,0-135.659-60.736-135.659-135.659\n	c0-74.922,60.737-135.659,135.659-135.659c74.922,0,135.658,60.737,135.658,135.659\n	C379.527,325.719,318.791,386.455,243.869,386.455z\" />\n            <g id=\"inner\">\n              <g opacity=\"0.2\">\n                <path fill=\"#C4C4C4\" d=\"M243.869,114.648c-75.748,0-137.154,61.406-137.154,137.153c0,75.749,61.406,137.154,137.154,137.154\n			c75.748,0,137.153-61.405,137.153-137.154C381.022,176.054,319.617,114.648,243.869,114.648z M243.869,382.56\n			c-72.216,0-130.758-58.543-130.758-130.758s58.542-130.758,130.758-130.758c72.216,0,130.758,58.543,130.758,130.758\n			S316.085,382.56,243.869,382.56z\" />\n              </g>\n              <g>\n                <path fill=\"#282828\" d=\"M243.869,113.637c-75.748,0-137.154,61.406-137.154,137.153c0,75.749,61.406,137.154,137.154,137.154\n			c75.748,0,137.153-61.405,137.153-137.154C381.022,175.043,319.617,113.637,243.869,113.637z M243.869,381.548\n			c-72.216,0-130.758-58.542-130.758-130.757c0-72.216,58.542-130.758,130.758-130.758c72.216,0,130.758,58.543,130.758,130.758\n			C374.627,323.005,316.085,381.548,243.869,381.548z\" />\n              </g>\n            </g>\n            <g id=\"markings\">\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"243.5\" y1=\"139\" x2=\"243.5\" y2=\"133\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"231.817\" y1=\"139.651\" x2=\"231.19\" y2=\"133.684\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"220.266\" y1=\"141.52\" x2=\"219.018\" y2=\"135.65\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"208.973\" y1=\"144.585\" x2=\"207.119\" y2=\"138.879\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"198.063\" y1=\"148.814\" x2=\"195.623\" y2=\"143.333\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"187.655\" y1=\"154.161\" x2=\"184.655\" y2=\"148.965\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"177.862\" y1=\"160.566\" x2=\"174.335\" y2=\"155.712\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"168.792\" y1=\"167.96\" x2=\"164.778\" y2=\"163.501\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"160.545\" y1=\"176.262\" x2=\"156.087\" y2=\"172.246\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"153.211\" y1=\"185.379\" x2=\"148.358\" y2=\"181.852\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"146.871\" y1=\"195.214\" x2=\"141.675\" y2=\"192.213\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"141.593\" y1=\"205.658\" x2=\"136.112\" y2=\"203.216\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"137.436\" y1=\"216.596\" x2=\"131.729\" y2=\"214.741\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"134.445\" y1=\"227.909\" x2=\"128.576\" y2=\"226.66\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.653\" y1=\"239.472\" x2=\"126.685\" y2=\"238.843\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.079\" y1=\"251.16\" x2=\"126.079\" y2=\"251.158\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"132.73\" y1=\"262.843\" x2=\"126.762\" y2=\"263.468\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"134.598\" y1=\"274.395\" x2=\"128.729\" y2=\"275.64\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"137.664\" y1=\"285.688\" x2=\"131.958\" y2=\"287.539\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"141.893\" y1=\"296.598\" x2=\"136.412\" y2=\"299.035\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"147.24\" y1=\"307.006\" x2=\"142.043\" y2=\"310.004\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"153.645\" y1=\"316.799\" x2=\"148.791\" y2=\"320.323\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"161.04\" y1=\"325.868\" x2=\"156.58\" y2=\"329.881\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"169.341\" y1=\"334.115\" x2=\"165.325\" y2=\"338.572\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"178.459\" y1=\"341.449\" x2=\"174.931\" y2=\"346.302\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"188.294\" y1=\"347.789\" x2=\"185.292\" y2=\"352.984\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"198.738\" y1=\"353.066\" x2=\"196.295\" y2=\"358.548\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"209.676\" y1=\"357.223\" x2=\"207.82\" y2=\"362.93\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"220.989\" y1=\"360.214\" x2=\"219.739\" y2=\"366.084\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"232.552\" y1=\"362.006\" x2=\"231.922\" y2=\"367.975\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"244.239\" y1=\"362.58\" x2=\"244.237\" y2=\"368.582\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"255.921\" y1=\"361.93\" x2=\"256.547\" y2=\"367.898\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"267.472\" y1=\"360.062\" x2=\"268.719\" y2=\"365.932\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"278.765\" y1=\"356.996\" x2=\"280.619\" y2=\"362.703\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"289.675\" y1=\"352.767\" x2=\"292.116\" y2=\"358.248\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"300.083\" y1=\"347.42\" x2=\"303.083\" y2=\"352.616\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"309.876\" y1=\"341.015\" x2=\"313.403\" y2=\"345.869\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"318.946\" y1=\"333.621\" x2=\"322.96\" y2=\"338.08\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"327.193\" y1=\"325.319\" x2=\"331.651\" y2=\"329.334\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"334.527\" y1=\"316.201\" x2=\"339.38\" y2=\"319.728\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"340.868\" y1=\"306.367\" x2=\"346.063\" y2=\"309.367\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"346.146\" y1=\"295.924\" x2=\"351.626\" y2=\"298.364\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"350.303\" y1=\"284.986\" x2=\"356.008\" y2=\"286.84\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"353.294\" y1=\"273.673\" x2=\"359.162\" y2=\"274.92\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"355.087\" y1=\"262.11\" x2=\"361.052\" y2=\"262.737\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"356\" y1=\"250.5\" x2=\"362\" y2=\"250.5\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"355.355\" y1=\"238.781\" x2=\"361.323\" y2=\"238.153\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"353.489\" y1=\"227.193\" x2=\"359.359\" y2=\"225.945\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"350.422\" y1=\"215.864\" x2=\"356.129\" y2=\"214.01\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"346.188\" y1=\"204.918\" x2=\"351.669\" y2=\"202.477\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"340.833\" y1=\"194.474\" x2=\"346.029\" y2=\"191.474\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"334.415\" y1=\"184.647\" x2=\"339.269\" y2=\"181.12\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"327.004\" y1=\"175.545\" x2=\"331.463\" y2=\"171.529\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"318.684\" y1=\"167.268\" x2=\"322.699\" y2=\"162.807\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"309.543\" y1=\"159.905\" x2=\"313.07\" y2=\"155.049\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"299.684\" y1=\"153.538\" x2=\"302.683\" y2=\"148.34\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"289.212\" y1=\"148.237\" x2=\"291.652\" y2=\"142.753\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"278.245\" y1=\"144.059\" x2=\"280.097\" y2=\"138.351\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"266.9\" y1=\"141.05\" x2=\"268.145\" y2=\"135.179\" />\n              <line fill=\"none\" stroke=\"#3F3F3F\" stroke-miterlimit=\"10\" x1=\"255.302\" y1=\"139.244\" x2=\"255.927\" y2=\"133.275\" />\n              <polygon fill=\"#3F3F3F\" points=\"247.391,133 243.5,141.05 239.609,133 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"188.022,147.021 188.677,155.938 181.283,150.912 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"143.617,188.848 148.643,196.243 139.726,195.588 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"126.074,247.273 134.125,251.165 126.076,255.056 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"140.095,306.644 149.013,305.988 143.988,313.382 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"181.922,351.049 189.318,346.022 188.663,354.938 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"240.349,368.591 244.24,360.54 248.13,368.589 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"299.718,354.569 299.062,345.652 306.457,350.677 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"344.123,312.742 339.096,305.348 348.012,306.002 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"362,254.316 353.951,250.426 362,246.534 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"347.934,194.779 339.018,195.435 344.042,188.04 	\" />\n              <polygon fill=\"#3F3F3F\" points=\"305.984,150.252 298.59,155.277 299.244,146.361 	\" />\n              <rect x=\"282\" y=\"152.98\" fill=\"none\" width=\"17.366\" height=\"27.947\" />\n              <text transform=\"matrix(1 0 0 1 282 174.4307)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">1</text>\n              <rect x=\"320.699\" y=\"188.474\" fill=\"none\" width=\"17.202\" height=\"26.267\" />\n              <text transform=\"matrix(1 0 0 1 320.6987 209.9229)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">2</text>\n              <rect x=\"335.04\" y=\"238.872\" fill=\"none\" width=\"21.03\" height=\"24.585\" />\n              <text transform=\"matrix(1 0 0 1 335.0396 260.3213)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">3</text>\n              <rect x=\"319.699\" y=\"290.242\" fill=\"none\" width=\"17.202\" height=\"23.557\" />\n              <text transform=\"matrix(1 0 0 1 319.6987 311.6914)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">4</text>\n              <rect x=\"284.5\" y=\"323.319\" fill=\"none\" width=\"19.212\" height=\"22.511\" />\n              <text transform=\"matrix(1 0 0 1 284.5 344.7695)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">5</text>\n              <rect x=\"235.552\" y=\"336.08\" fill=\"none\" width=\"19.938\" height=\"24.15\" />\n              <text transform=\"matrix(1 0 0 1 235.5522 357.5293)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">6</text>\n              <rect x=\"189.373\" y=\"322.319\" fill=\"none\" width=\"19.673\" height=\"25.003\" />\n              <text transform=\"matrix(1 0 0 1 189.3726 343.7695)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">7</text>\n              <rect x=\"151.066\" y=\"287.539\" fill=\"none\" width=\"17.726\" height=\"25.203\" />\n              <text transform=\"matrix(1 0 0 1 151.0664 308.9883)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">8</text>\n              <rect x=\"136.392\" y=\"241.25\" fill=\"none\" width=\"20.696\" height=\"22.348\" />\n              <text transform=\"matrix(1 0 0 1 136.3916 262.6992)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">9</text>\n              <rect x=\"149.066\" y=\"191.474\" fill=\"none\" width=\"36.554\" height=\"27.122\" />\n              <text transform=\"matrix(1 0 0 1 149.0664 212.9229)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">10</text>\n              <rect x=\"184.967\" y=\"158.518\" fill=\"none\" width=\"36.021\" height=\"27.13\" />\n              <text transform=\"matrix(1 0 0 1 184.9673 179.9668)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">11</text>\n              <rect x=\"225.723\" y=\"144.514\" fill=\"none\" width=\"37.029\" height=\"29.25\" />\n              <text transform=\"matrix(1 0 0 1 225.7227 165.9639)\" fill=\"#303030\" font-family=\"'Futura-Medium'\" font-size=\"26\">12</text>\n            </g>\n            <path id=\"hours\" fill=\"#3A3A3A\" d=\"M242.515,270.21c-0.44,0-0.856-0.355-0.926-0.79l-3.156-19.811c-0.069-0.435-0.103-1.149-0.074-1.588\n	l4.038-62.009c0.03-0.439,0.414-0.798,0.854-0.798h0.5c0.44,0,0.823,0.359,0.852,0.798l4.042,62.205\n	c0.028,0.439-0.015,1.152-0.097,1.584l-3.712,19.623c-0.082,0.433-0.508,0.786-0.948,0.786H242.515z\" />\n            <path id=\"minutes\" fill=\"#3A3A3A\" d=\"M247.862,249.75l-2.866,24.244c-0.099,1.198-0.498,2.18-1.497,2.179c-0.999,0-1.397-0.98-1.498-2.179\n			l-2.861-24.508c-0.099-1.199,3.479-93.985,3.479-93.985c0.036-1.201-0.117-2.183,0.881-2.183c0.999,0,0.847,0.982,0.882,2.183\n			L247.862,249.75z\" />\n            <g id=\"seconds\">\n              <line fill=\"none\" stroke=\"#BF4116\" stroke-miterlimit=\"10\" x1=\"243.5\" y1=\"143\" x2=\"243.5\" y2=\"266\" />\n              <circle fill=\"none\" stroke=\"#BF4116\" stroke-miterlimit=\"10\" cx=\"243.5\" cy=\"271\" r=\"5\" />\n              <circle fill=\"#BF4116\" cx=\"243.5\" cy=\"251\" r=\"3.917\" />\n            </g>\n          </svg>\n\n          <script type=\"text/javascript\">\n            analogClock(\"modal" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 142,
            "column": 30
          },
          "end": {
            "line": 142,
            "column": 36
          }
        }
      }) : helper))) +
      "\", \"" +
      alias4(((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "tz",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 142,
            "column": 40
          },
          "end": {
            "line": 142,
            "column": 46
          }
        }
      }) : helper))) +
      "\");\n\n          </script>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["modaldigitalclock"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return " - " +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "tz",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 110
          },
          "end": {
            "line": 5,
            "column": 116
          }
        }
      }) : helper)));
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
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

    return "<div class=\"modal fade\" style=\"z-index:6000 !important;\" id=\"digitalClockModal" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 78
          },
          "end": {
            "line": 1,
            "column": 84
          }
        }
      }) : helper))) +
      "\" tabindex=\"-1\" aria-labelledby=\"digitalClockModalLabel" +
      alias4(((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 139
          },
          "end": {
            "line": 1,
            "column": 145
          }
        }
      }) : helper))) +
      "\" aria-hidden=\"true\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\">\n  <div class=\"modal-dialog modal-fullscreen\">\n    <div class=\"modal-content\" style=\"opacity:1 !important;z-index:6000 !important;\">\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title fs-5\" id=\"digitalClockModalLabel{id}}\">Current time " +
      ((stack1 = (lookupProperty(helpers, "when") || (depth0 && lookupProperty(depth0, "when")) || alias2).call(alias1, (depth0 != null ? lookupProperty(depth0, "tz") : depth0), "noteq", "", {
        "name": "when",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 83
          },
          "end": {
            "line": 5,
            "column": 125
          }
        }
      })) != null ? stack1 : "") +
      "</h1>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <center>\n          <object style=\"background:transparent;pointer-events:none;width:90%;height:90%\" data=\"/assets/img/digitalclock.svg\" type=\"image/svg+xml\">\n            <param name=\"tz\" value=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "tz",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 11,
            "column": 36
          },
          "end": {
            "line": 11,
            "column": 42
          }
        }
      }) : helper))) +
      "\" />\n          </object>\n        </center>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return ((stack1 = (lookupProperty(helpers, "when") || (depth0 && lookupProperty(depth0, "when")) || container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), (data && lookupProperty(data, "key")), "eq", "_s", {
      "name": "when",
      "hash": {},
      "fn": container.program(2, data, 0, blockParams, depths),
      "inverse": container.program(4, data, 0, blockParams, depths),
      "data": data,
      "loc": {
        "start": {
          "line": 3,
          "column": 4
        },
        "end": {
          "line": 61,
          "column": 13
        }
      }
    })) != null ? stack1 : "");
  },
  "2": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "4": function(container, depth0, helpers, partials, data, blockParams, depths) {
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
        "inverse": container.program(5, data, 0, blockParams, depths),
        "data": data,
        "loc": {
          "start": {
            "line": 7,
            "column": 39
          },
          "end": {
            "line": 7,
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
            "line": 7,
            "column": 146
          },
          "end": {
            "line": 7,
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
            "line": 7,
            "column": 203
          },
          "end": {
            "line": 7,
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
            "line": 8,
            "column": 10
          },
          "end": {
            "line": 8,
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
            "line": 11,
            "column": 24
          },
          "end": {
            "line": 11,
            "column": 34
          }
        }
      }) : helper))) +
      "\" class=\"accordion-collapse collapse" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (data && lookupProperty(data, "first")), {
        "name": "if",
        "hash": {},
        "fn": container.program(7, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 11,
            "column": 70
          },
          "end": {
            "line": 11,
            "column": 96
          }
        }
      })) != null ? stack1 : "") +
      "\" data-bs-parent=\"#projects\">\n        <div class=\"accordion-body\">\n          <div class=\"container text-left\">\n            <div class=\"row justify-content-md-left\">\n              <div class=\"col col-lg-2\">\n                <img style=\"max-width:128px;\" src=\"" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "iconSlug") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(9, data, 0, blockParams, depths),
        "inverse": container.program(11, data, 0, blockParams, depths),
        "data": data,
        "loc": {
          "start": {
            "line": 16,
            "column": 51
          },
          "end": {
            "line": 16,
            "column": 151
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n              </div>\n              <div class=\"col-md-auto\">\n                <table class=\"table table-bordered\">\n                  <tbody>\n                    <tr>\n                      <td>Compose file:</td>\n                      <td>" +
      alias4(((helper = (helper = lookupProperty(helpers, "config") || (depth0 != null ? lookupProperty(depth0, "config") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "config",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 23,
            "column": 26
          },
          "end": {
            "line": 23,
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
            "line": 27,
            "column": 26
          },
          "end": {
            "line": 27,
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
            "line": 31,
            "column": 26
          },
          "end": {
            "line": 31,
            "column": 43
          }
        }
      }) : helper))) +
      "</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Container Name</th>\n                      <th>Hostname</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n" +
      ((stack1 = lookupProperty(helpers, "each").call(alias1, (depth0 != null ? lookupProperty(depth0, "containers") : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(13, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 44,
            "column": 20
          },
          "end": {
            "line": 52,
            "column": 29
          }
        }
      })) != null ? stack1 : "") +
      "                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n";
  },
  "5": function(container, depth0, helpers, partials, data) {
    return " collapsed";
  },
  "7": function(container, depth0, helpers, partials, data) {
    return " show";
  },
  "9": function(container, depth0, helpers, partials, data) {
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

    return "/api/icons/r/" +
      alias4(((helper = (helper = lookupProperty(helpers, "iconCatalog") || (depth0 != null ? lookupProperty(depth0, "iconCatalog") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "iconCatalog",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 16,
            "column": 80
          },
          "end": {
            "line": 16,
            "column": 95
          }
        }
      }) : helper))) +
      "/" +
      alias4(((helper = (helper = lookupProperty(helpers, "iconSlug") || (depth0 != null ? lookupProperty(depth0, "iconSlug") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "iconSlug",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 16,
            "column": 96
          },
          "end": {
            "line": 16,
            "column": 108
          }
        }
      }) : helper))) +
      "/resource";
  },
  "11": function(container, depth0, helpers, partials, data) {
    return "/api/icons/question";
  },
  "13": function(container, depth0, helpers, partials, data, blockParams, depths) {
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
        "fn": container.program(14, data, 0, blockParams, depths),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 46,
            "column": 24
          },
          "end": {
            "line": 48,
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
            "line": 49,
            "column": 28
          },
          "end": {
            "line": 49,
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
            "line": 50,
            "column": 28
          },
          "end": {
            "line": 50,
            "column": 40
          }
        }
      }) : helper))) +
      "</td>\n                      </tr>\n";
  },
  "14": function(container, depth0, helpers, partials, data, blockParams, depths) {
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

    return "                          <td><button onclick=\"composeEdit(this, 2); return false;\" data-containerid=\"" +
      alias4(((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
        "name": "containerName",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 47,
            "column": 102
          },
          "end": {
            "line": 47,
            "column": 119
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
            "line": 47,
            "column": 173
          },
          "end": {
            "line": 47,
            "column": 188
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
            "line": 62,
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "available") : stack1), {
      "name": "if",
      "hash": {},
      "fn": container.program(2, data, 0),
      "inverse": container.program(4, data, 0),
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 41
        },
        "end": {
          "line": 1,
          "column": 111
        }
      }
    })) != null ? stack1 : "");
  },
  "2": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "4": function(container, depth0, helpers, partials, data) {
    return "disabled aria-disabled=\"true\" ";
  },
  "6": function(container, depth0, helpers, partials, data) {
    return "btn-secondary";
  },
  "8": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), depth0));
  },
  "10": function(container, depth0, helpers, partials, data) {
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
  "12": function(container, depth0, helpers, partials, data) {
    return "/api/icons/question";
  },
  "14": function(container, depth0, helpers, partials, data) {
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
  "16": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "      <span class=\"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary bg-gradient\">\n" +
      ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "available") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(17, data, 0),
        "inverse": container.program(19, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 9,
            "column": 8
          },
          "end": {
            "line": 13,
            "column": 15
          }
        }
      })) != null ? stack1 : "") +
      "      </span>\n";
  },
  "17": function(container, depth0, helpers, partials, data) {
    return "          <span class=\"badge border border-light rounded-circle bg-success p-2\"> </span>\n";
  },
  "19": function(container, depth0, helpers, partials, data) {
    return "          <span class=\"badge border border-light rounded-circle bg-danger p-2\"> </span>\n";
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

    return "<a role=\"button\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "monitor") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 17
          },
          "end": {
            "line": 1,
            "column": 118
          }
        }
      })) != null ? stack1 : "") +
      " data-name=\"" +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "containerName") : stack1), depth0)) +
      "\" data-url=\"" +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "public") : stack1), depth0)) +
      "\" href=\"" +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "public") : stack1), depth0)) +
      "\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(6, data, 0),
        "inverse": container.program(8, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 224
          },
          "end": {
            "line": 1,
            "column": 311
          }
        }
      })) != null ? stack1 : "") +
      " widget\" style=\"position: relative !imporant;" +
      ((stack1 = (lookupProperty(helpers, "isnotempty") || (depth0 && lookupProperty(depth0, "isnotempty")) || alias4).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "opacity") : stack1), {
        "name": "isnotempty",
        "hash": {},
        "fn": container.program(10, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 356
          },
          "end": {
            "line": 1,
            "column": 439
          }
        }
      })) != null ? stack1 : "") +
      "\" target=\"_blank\">\n  <div style=\"position:relative;\">\n    <div style=\"text-align: center;padding:10px;width:100%;height:64px;\">\n      <img style=\"width:64px;max-height:64px\" src=\"" +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "iconSlug") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(12, data, 0),
        "inverse": container.program(14, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 51
          },
          "end": {
            "line": 4,
            "column": 186
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n    </div>\n    <div style=\"padding:10px;\">" +
      alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "name") : stack1), depth0)) +
      "</div>\n" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "service") : depth0)) != null ? lookupProperty(stack1, "monitor") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(16, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 7,
            "column": 4
          },
          "end": {
            "line": 15,
            "column": 11
          }
        }
      })) != null ? stack1 : "") +
      "  </div>\n</a>\n";
  },
  "useData": true
});
this["app"]["templates"]["subtitle"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(((helper = (helper = lookupProperty(helpers, "color") || (depth0 != null ? lookupProperty(depth0, "color") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
      "name": "color",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 28
        },
        "end": {
          "line": 1,
          "column": 37
        }
      }
    }) : helper)));
  },
  "3": function(container, depth0, helpers, partials, data) {
    return "primary";
  },
  "5": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "&nbsp<i class=\"" +
      container.escapeExpression(((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "icon",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 32
          },
          "end": {
            "line": 3,
            "column": 40
          }
        }
      }) : helper))) +
      "\"></i>";
  },
  "7": function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return container.escapeExpression(((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 26
          },
          "end": {
            "line": 4,
            "column": 35
          }
        }
      }) : helper))) +
      "\n        ";
  },
  "9": function(container, depth0, helpers, partials, data) {
    return container.escapeExpression(container.lambda(depth0, depth0));
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

    return "<div class=\"bg-" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "color") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 1,
            "column": 59
          }
        }
      })) != null ? stack1 : "") +
      " bg-gradient mb-2 rounded text-light\">\n  <p class=\"fs-4\" style=\"margin-top;5px\">\n    " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "icon") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 4
          },
          "end": {
            "line": 3,
            "column": 53
          }
        }
      })) != null ? stack1 : "") +
      "\n      &nbsp;" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, (depth0 != null ? lookupProperty(depth0, "title") : depth0), {
        "name": "if",
        "hash": {},
        "fn": container.program(7, data, 0),
        "inverse": container.program(9, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 12
          },
          "end": {
            "line": 5,
            "column": 31
          }
        }
      })) != null ? stack1 : "") +
      "\n  </p>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["tagcloud"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      alias4 = container.hooks.helperMissing,
      alias5 = "function",
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "    <li><a data-weight=\"" +
      alias2(alias1(depth0, depth0)) +
      "\" onclick=\"document.getElementById('" +
      alias2(alias1((depths[1] != null ? lookupProperty(depths[1], "Id") : depths[1]), depth0)) +
      "').tagfunc('" +
      alias2(((helper = (helper = lookupProperty(helpers, "key") || (data && lookupProperty(data, "key"))) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
        "name": "key",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 89
          },
          "end": {
            "line": 3,
            "column": 97
          }
        }
      }) : helper))) +
      "');\">" +
      alias2(((helper = (helper = lookupProperty(helpers, "key") || (data && lookupProperty(data, "key"))) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
        "name": "key",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 102
          },
          "end": {
            "line": 3,
            "column": 110
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
  "1": function(container, depth0, helpers, partials, data) {
    return "Theme";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<div class=\"dropdown\" data-hb-component=\"themechooser\">\n  <button style=\"height:33px !important;\" class=\"btn dropdown-toggle\" style=\"color:white!important\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    <i style=\"color:white!important\" id=\"activeTheme\" class=\"bi bi-circle-half\"></i>\n    " +
      ((stack1 = (lookupProperty(helpers, "when") || (depth0 && lookupProperty(depth0, "when")) || container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0, "size") : depth0)) != null ? lookupProperty(stack1, "screen") : stack1)) != null ? lookupProperty(stack1, "w") : stack1), "lt", 768, {
        "name": "when",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 4
          },
          "end": {
            "line": 4,
            "column": 51
          }
        }
      })) != null ? stack1 : "") +
      "\n  </button>\n  <ul class=\"dropdown-menu dropdown-menu-end\">\n    <li><button type=\"button\" class=\"dropdown-item d-flex align-items-center\" aria-pressed=\"false\" onclick=\"ui().themeChooser().chooseTheme('light');\">\n        <i id=\"light\" class=\"bi bi-sun\"></i> Light</button>\n    </li>\n    <li> <button type=\"button\" class=\"dropdown-item d-flex align-items-center\" aria-pressed=\"false\" onclick=\"ui().themeChooser().chooseTheme('dark');\">\n        <i id=\"dark\" class=\"bi bi-moon-stars\"></i> Dark</button>\n    </li>\n    <li><button type=\"button\" class=\"dropdown-item d-flex align-items-center\" aria-pressed=\"false\" onclick=\"ui().themeChooser().chooseTheme('auto')\">\n        <i id=\"auto\" class=\"bi bi-circle-half\"></i> Auto</button>\n    </li>\n  </ul>\n</div>\n";
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
this["app"]["templates"]["widget-audio"] = Handlebars.template({
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "<audio loop=\"true\" autoplay=\"true\" controls src=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "url") : stack1), depth0)) +
      "\"></audio>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-clock"] = Handlebars.template({
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

    return "<script type=\"text/javascript\">\n  var clockModal = document.getElementById(\"analogClockModal" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\");\n  if (clockModal) {} else {\n    var clockModal = app.templates.modalanalogclock({\n      tz: \"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "tz") : stack1), depth0)) +
      "\",\n      id: \"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\"\n    });\n    $(document.body).append(clockModal);\n  }\n\n</script>\n<button class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 12,
            "column": 19
          },
          "end": {
            "line": 12,
            "column": 106
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
            "line": 12,
            "column": 122
          },
          "end": {
            "line": 12,
            "column": 205
          }
        }
      })) != null ? stack1 : "") +
      ";width:100px;\" data-bs-toggle=\"modal\" data-bs-target=\"#analogClockModal" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\">\n  <div style=\"width:100px;margin 0 auto;\">\n" +
      ((stack1 = container.invokePartial(lookupProperty(partials, "analogclock"), (depth0 != null ? lookupProperty(depth0, "settings") : depth0), {
        "name": "analogclock",
        "data": data,
        "indent": "    ",
        "helpers": helpers,
        "partials": partials,
        "decorators": container.decorators
      })) != null ? stack1 : "") +
      "  </div>\n</button>\n";
  },
  "usePartial": true,
  "useData": true
});
this["app"]["templates"]["widget-digitalclock"] = Handlebars.template({
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

    return "<script type=\"text/javascript\">\n  var digitalClockModal = document.getElementById(\"digitalClockModal" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\");\n  if (digitalClockModal) {} else {\n    var digitalClockModal = app.templates.modaldigitalclock({\n      tz: \"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "tz") : stack1), depth0)) +
      "\",\n      id: \"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\"\n    });\n    $(document.body).append(digitalClockModal);\n  }\n\n</script>\n<button style=\"background: rgb(159, 191 , 135) !important;\" class=\"btn " +
      ((stack1 = (lookupProperty(helpers, "isempty") || (depth0 && lookupProperty(depth0, "isempty")) || alias4).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "parent") : depth0)) != null ? lookupProperty(stack1, "buttonclass") : stack1), {
        "name": "isempty",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.program(3, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 12,
            "column": 71
          },
          "end": {
            "line": 12,
            "column": 158
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
            "line": 12,
            "column": 174
          },
          "end": {
            "line": 12,
            "column": 257
          }
        }
      })) != null ? stack1 : "") +
      "\" data-bs-toggle=\"modal\" data-bs-target=\"#digitalClockModal" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\">\n  <div class=\"digitalclock\">\n    <object style=\"background:transparent;pointer-events:none;width:260px;height:80px\" data=\"/assets/img/digitalclock.svg\" type=\"image/svg+xml\">\n      <param name=\"tz\" value=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "tz") : stack1), depth0)) +
      "\" />\n    </object>\n  </div>\n</button>\n";
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
this["app"]["templates"]["widget-frame"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "width:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), depth0)) +
      ";";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "height:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), depth0)) +
      ";";
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

    return "<iframe src=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "url") : stack1), depth0)) +
      "\" frameBorder=\"0\" style=\"border:none;" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 66
          },
          "end": {
            "line": 1,
            "column": 120
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(3, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 120
          },
          "end": {
            "line": 1,
            "column": 177
          }
        }
      })) != null ? stack1 : "") +
      "\">\n</iframe>\n";
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
      "\">\n  <img class=\"widgetglobe\" border=\"0\" src=\"/api/desktop/background/globe?h=" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "size") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(11, data, 0),
        "inverse": container.program(13, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 75
          },
          "end": {
            "line": 2,
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
            "line": 2,
            "column": 131
          },
          "end": {
            "line": 2,
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
            "line": 2,
            "column": 189
          },
          "end": {
            "line": 2,
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
            "line": 2,
            "column": 250
          },
          "end": {
            "line": 2,
            "column": 293
          }
        }
      })) != null ? stack1 : "") +
      "\" />\n</button>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-image"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "width:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), depth0)) +
      ";";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "height:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), depth0)) +
      ";";
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

    return "<img èsrc=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "url") : stack1), depth0)) +
      "\" frameBorder=\"0\" style=\"border:none;" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 64
          },
          "end": {
            "line": 1,
            "column": 118
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(3, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 118
          },
          "end": {
            "line": 1,
            "column": 175
          }
        }
      })) != null ? stack1 : "") +
      "\">\n</img>\n";
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
    return "<div class=\"container\" id=\"tags\"></div>\n<script type=\"text/javascript\">\n  tagCloud(\"tags\", function (tag) {\n    viewBookmarks(tag);\n    return false;\n  });\n\n</script>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-tv"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "width:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), depth0)) +
      ";";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "height:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), depth0)) +
      ";";
  },
  "5": function(container, depth0, helpers, partials, data) {
    return "";
  },
  "7": function(container, depth0, helpers, partials, data) {
    return "class=\"mw-100\" ";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : (container.nullContext || {}),
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
      };

    return "<div id=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\">\n  <select class=\"form-select\" onchange=\"changeVideo(this);\" data-id=\"" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\" id=\"ch_" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\"></select>\n  <div id=\"vid_" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\" style=\"" +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 39
          },
          "end": {
            "line": 3,
            "column": 93
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(3, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 93
          },
          "end": {
            "line": 3,
            "column": 150
          }
        }
      })) != null ? stack1 : "") +
      "\" " +
      ((stack1 = lookupProperty(helpers, "if").call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.program(7, data, 0),
        "data": data,
        "loc": {
          "start": {
            "line": 3,
            "column": 152
          },
          "end": {
            "line": 3,
            "column": 205
          }
        }
      })) != null ? stack1 : "") +
      ">\n  </div>\n  <script type=\"text/javascript\">\n    var ch = document.getElementById(\"ch_" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\");\n    var vid = document.getElementById(\"vid_" +
      alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "id") : stack1), depth0)) +
      "\");\n    var pl = " +
      alias2((lookupProperty(helpers, "stringify") || (depth0 && lookupProperty(depth0, "stringify")) || container.hooks.helperMissing).call(alias3, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "playlist") : stack1), {
        "name": "stringify",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 13
          },
          "end": {
            "line": 8,
            "column": 44
          }
        }
      })) +
      "\n    loadPlaylist(pl, ch, vid, function () {});\n\n  </script>\n</div>\n";
  },
  "useData": true
});
this["app"]["templates"]["widget-video"] = Handlebars.template({
  "1": function(container, depth0, helpers, partials, data) {
    return "autoplay muted";
  },
  "3": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "width:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), depth0)) +
      ";";
  },
  "5": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "height:" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), depth0)) +
      ";";
  },
  "7": function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }
      return undefined
    };

    return "\n    <source src=\"" +
      container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "dashvideo") : stack1), depth0)) +
      "\" type=\"application/dash+xml\" />\n";
  },
  "9": function(container, depth0, helpers, partials, data) {
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
  "11": function(container, depth0, helpers, partials, data) {
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

    return "<video " +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "autoplay") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 53
          }
        }
      })) != null ? stack1 : "") +
      " preload=\"auto\" controls id=\"video\" style=\"" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "width") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(3, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 96
          },
          "end": {
            "line": 1,
            "column": 150
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "height") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(5, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 150
          },
          "end": {
            "line": 1,
            "column": 207
          }
        }
      })) != null ? stack1 : "") +
      "\">\n  i" +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "dashvideo") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(7, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 3
          },
          "end": {
            "line": 4,
            "column": 9
          }
        }
      })) != null ? stack1 : "") +
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "mp4video") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(9, data, 0),
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
      ((stack1 = lookupProperty(helpers, "if").call(alias1, ((stack1 = (depth0 != null ? lookupProperty(depth0, "settings") : depth0)) != null ? lookupProperty(stack1, "webmvideo") : stack1), {
        "name": "if",
        "hash": {},
        "fn": container.program(11, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 8,
            "column": 2
          },
          "end": {
            "line": 10,
            "column": 9
          }
        }
      })) != null ? stack1 : "") +
      "</video>\n";
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
