window._render = function(template, args) {
  const trigger = ((elem, name, e) => {
    var func = new Function('e',
      'with(document) {' +
      'with(this) {' +
      elem.getAttribute('on' + name) +
      '}' +
      '}');

    func.call(elem, e);
  });

  return new Promise((resolve, reject) => {
    var url = template.getAttribute("data-url");
    var name = template.getAttribute("data-template");
    var settings = null;
    var refreshInterval = template.getAttribute("data-refresh-interval");
    var query = null;

    if (template.getAttribute("data-settings")) {
      var s = template.getAttribute("data-settings");
      s = window.atob(s);
      settings = JSON.parse(s);
    }

    if (args) {
      if (args.url) {
        url = args.url;
      }
      if (args.template) {
        name = args.template;
      }
      if (args.refreshInterval) {
        refreshInterval = args.refreshInterval;
      }
      if (args.query) {
        query = args.query;
      }
    }
    var apiUrl = "";
    //  "/api/views/render?template=" + encodeURIComponent(name) + "&api=";

    if (query) {
      apiUrl += url.format(args.query);
    } else {
      apiUrl += url;
    }
    var f = app.templates[name];
    axios
      .get(apiUrl)
      .then((response) => {
        var data = response.data;
        data._s = settings;
        if (template.getAttribute("onprerender")) {
          trigger(template, "prerender", data);
        }
        template.innerHTML = f(data);
        $(template).find('.datatable').DataTable({
          paging: false,
          searching: false,
          stateSave: true,
        });
        var timeout = parseInt(refreshInterval ?? "0") * 1000;
        if (timeout > 0) {
          setTimeout(async () => {
            window._render(template, args);
          }, timeout);
        }
        if (template.getAttribute("onrender")) {
          trigger(template, "render", data);
        }
        resolve(template);
      })
      .catch((err) => {
        console.log(err);
        reject(template, err);
      });
  });
};

window.ui = function(selector) {
  var targets = [];
  if (selector) {
    targets = document.querySelectorAll(selector);
  }

  if (!window._stateStore) {
    window._stateStore = {};
  }

  return {
    desktop: function() {
      var desktop = {
        screen: {
          w: window.screen.width,
          h: window.screen.height
        },
        window: {
          w: window.innerWidth,
          h: window.innerHeight
        },
        breakpoint: "x-small"
      };

      if (!window.screen) {
        desktop.screen.w = 1500;
        desktop.screen.h = 800;
      }
      if (desktop.window.w >= 576) {
        desktop.breakpoint = "small";
      }
      if (desktop.window.w >= 768) {
        desktop.breakpoint = "medium";
      }
      if (desktop.window.w >= 992) {
        desktop.breakpoint = "large";
      }
      if (desktop.window.w >= 1200) {
        desktop.breakpoint = "x-large";
      }
      if (desktop.window.w >= 1400) {
        desktop.breakpoint = "xx-large";
      }

      var date = new Date();
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
      document.cookie = "desktop=" + JSON.stringify(desktop) + expires + "; path=/";
      return desktop;
    },
    toggleWait: function(args) {
      targets.forEach((ctl) => {
        $(ctl).find(".wait").toggleClass("wait-show");
      });
    },
    observe: function(target) {
      var ev =
        "__OBS_" +
        target.getAttribute("data-template").split("/").pop() +
        "_" +
        name;
      window._stateStore[ev] = new MutationObserver(
        (mutationList, observer) => {
          if (mutationList) {}
        },
      );

      window._stateStore[ev].observe(target, {
        childList: true,
        subtree: true,
      });
    },
    enterCheck: function(args) {
      const keyupfunc = function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {

          e.preventDefault();
          if (args.onEnterKey) {
            args.onEnterKey(this);
            return false;
          }
          return false;
        }
      }
      targets.forEach((ctl) => {
        if (window.attachEvent) {
          ctl.attachEvent("onkeyup", keyupfunc);
        } else {
          ctl.addEventListener("keyup", keyupfunc, false);
        }
      });
    },
    template: function(args) {
      return new Promise((resolve, reject) => {
        if (targets.length > 0) {
          var promises = [];
          targets.forEach((template) => {
            //            this.observe(template);
            promises.push(window._render(template, args));
            template.reload = (() => {
              window._render(template, args);
            });
          });
          Promise.allSettled(promises)
            .then((results) => {
              resolve();
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    },

    weather: function(args) {
      var apiUrl =
        "api/resources/weather?latitude=" +
        args.latitude +
        "&longitude=" +
        args.longitude +
        "&days=" +
        (args.days ?? 6);

      return new Promise((resolve, reject) => {
        axios
          .get(apiUrl)
          .then((w) => {
            var weather = w.data;
            resolve(weather);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    geoLocation: function() {
      const apiLocation = new Promise((resolve, reject) => {
        var apiUrl = "/api/resources/location";
        axios
          .get(apiUrl)
          .then((response) => {
            var result = response.data;
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });

      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentÿPosition(
            function(position) {
              resolve(position);
            },
            function(err) {
              apiLocation
                .then((loc) => {
                  resolve(loc);
                })
                .catch((err) => {
                  reject(err);
                });
            },
          );
        } else {
          apiLocation
            .then((loc) => {
              resolve(loc);
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    },
    messageBox: function(args) {
      document.getElementById("msgboxLabel").innerHTML = args.label;
      document.getElementById("msgboxBody").innerHTML = args.body;
      var options = {
        focus: true,
        backdrop: "static",
      };
      window.msgboxModal = new bootstrap.Modal(
        document.getElementById("msgboxModal"),
        options,
      );
      window.msgboxModal.show();
    },
    toast: function(args) {
      document.getElementById("toastLabel").innerHTML = args.label;
      document.getElementById("toastBody").innerHTML = args.body;
      document.getElementById("toastSmall").innerHTML = args.small ?? "";
      var option = {
        animation: true,
        autohide: args.autohide ?? true,
        delay: args.delay ?? 5000,
      };
      window.toast = new bootstrap.Toast(
        document.getElementById("toast"),
        option,
      );
      window.toast.show();
    },
    themeChooser: function() {
      var instance = {
        getStoredTheme: function() {
          return localStorage.getItem("theme");
        },
        setStoredTheme: function(theme) {
          localStorage.setItem("theme", theme);
        },
        getPreferredTheme: function() {
          const storedTheme = this.getStoredTheme();
          if (storedTheme) {
            return storedTheme;
          }
          return window.matchMedia("(prefers-color-scheme: dark)").matches ?
            "dark" :
            "light";
        },
        setTheme: function(value) {
          var theme = this.getPreferredTheme();
          if (value) {
            theme = value;
          }

          if (theme === "auto") {
            document.documentElement.setAttribute(
              "data-bs-theme",
              window.matchMedia("(prefers-color-scheme: dark)").matches ?
              "dark" :
              "light",
            );
          } else {
            document.documentElement.setAttribute("data-bs-theme", theme);
          }
        },
        chooseTheme: function(theme) {
          var activeTheme = document.getElementById("activeTheme");
          var activeClass = document.getElementById(theme).className;
          activeTheme.className = activeClass;
          this.setTheme(theme);
          this.setStoredTheme(theme);
        },
      };
      return instance;
    },
  };
};

String.prototype.format = function(tokens) {
  var formatted = this;
  for (var token in tokens)
    if (tokens.hasOwnProperty(token))
      formatted = formatted.replace(
        RegExp("{" + token + "}", "g"),
        tokens[token],
      );
  return formatted;
};

axios.interceptors.request.use(function(config) {
  const token = sessionStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

window.ui().desktop();
setInterval(function() {
  window.ui().desktop();
}, 1000);
