function logout() {
  window.location.href = "/auth/logout";
}

function admin() {
  window.location.href = "/admin/index";
}

function createEditor(ctl, value) {
  var target = document.getElementById(ctl);
  const getTheme = () => document.documentElement.getAttribute('data-bs-theme');
  var theme = getTheme();
  const initialState = cm6.createEditorState(document.getElementById(value).value, {
    dark: (theme == "dark")
  });
  target.view = cm6.createEditorView(initialState, document.getElementById(ctl));

  const observer = new MutationObserver(() => {
    theme = getTheme();
    onThemeChange(theme);
  });
  observer.observe(document.documentElement, {
    attributeFilter: ["data-bs-theme"]
  });

  function onThemeChange(theme) {
    var options = {
      dark: (theme == "dark")
    };
    let newState = cm6.createEditorState(target.view.state.doc, options);
    target.view.setState(newState);
  }
}

function getBingBackground() {
  var apiUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  axios.get(apiUrl).then((response) => {
    var imgs = response.data;
    wimgs[0].url;
  }).catch((err) => {
    alert(err);
  });

}

function provisionTemplate(sender) {
  var name = sender.getAttribute("data-name");
  var catalog = sender.getAttribute("data-catalog");
  var url = "/admin/createstack?catalog=" + encodeURIComponent(catalog) + "&name=" + encodeURIComponent(name);
  window.location.href = url;
}

function clearImportCatalog() {
  document.getElementById("templateUrl").value = "";
  document.getElementById("templateTitle").value = "";
}

function importCatalog() {
  var url = document.getElementById("templateUrl").value;
  var title = document.getElementById("templateTitle").value;

  axios
    .post("/api/catalog/create", {
      name: title,
      url: url
    })
    .then((response) => {
      window.location.reload(true);
      return false;
    })
    .catch((err) => {
      alert(err);
    });
}

function viewCatalog() {
  var id = document.getElementById("templates").value;

  if (id != "") {
    window.location.href = "/admin/catalog?id=" + encodeURIComponent(id);
  }
}

function filterCatalog(id, filter) {
  window.location.href = "/admin/catalog?id=" + encodeURIComponent(id) + "&filter=" + encodeURIComponent(filter);
}

function chooseDesktopTheme(obj) {
  var theme = obj;
  if (theme === "auto") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark" :
      "light";
  }
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
}

function readLocalFile(src, target) {
  const file = document.querySelector(src).files[0];
  const reader = new FileReader();
  const ctl = document.querySelector(target);

  reader.onload = res => {
    ctl.value = res.target.result;
  };
  reader.onerror = err => ctl.value = err;

  reader.readAsText(file);
}

function exportContainer(target) {
  var container = target.getAttribute("data-containerid");
  var url = "/api/docker/container/" + encodeURIComponent(container) + "/createoptions";
  window.open(url);
}

function loadBackground(dynamic, interval, uri) {
  window._loadBg = function() {
    var url = "/api/desktop/background?w=" + window.innerWidth + "&h=" + window.innerHeight;
    document.getElementById("bgimage").style.background = "url('" + url + "')";
    document.body.style.background = "#000000";
  }
  window._loadBg();

  if (dynamic) {
    window._bgInterval = window.setInterval(function() {
      window._loadBg();
    }, ((interval == 0 ? 15 : interval) * 60000));
    window.onfocus = function() {
      window._loadBg();
      if (window._bgInterval) {
        window.clearInterval(window._bgInterval);
      }

      window._bgInterval = window.setInterval(function() {
        window._loadBg();
      }, ((interval == 0 ? 15 : interval) * 60000));
    }
  }
}

function setBgColor(src, target) {
  const rgbToHex = function(r, g, b) {
    if (r > 255 || g > 255 || b > 255) {
      return "";
    }

    return ((r << 16) | (g << 8) | b).toString(16);
  };

  var srcImg = document.getElementById(src);
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(document.getElementById(src), 0, 0);
  var p = ctx.getImageData(0, 0, 1, 1).data;
  var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

  if (p.length > 3) {
    var alpha = p[3];
    if (alpha == 0) {
      hex = "#ffffff";
    }
  }

  document.getElementById(target).style.background = hex;
}

function doSearch(ctl) {
  var q = document.querySelector(ctl).value;
  window.open("https://html.duckduckgo.com/html?q=" + encodeURIComponent(q));
}

function newsPage(url) {
  window.open("/news?url=" + encodeURIComponent(url));
}

function tagCloud(id, targetUrl) {
  var apiUrl = "/api/external/linkding/tags/count";
  axios.get(apiUrl).then((response) => {
    var feed = response.data;
    document.getElementById(id).innerHTML = app.templates.tagcloud({
      feed: feed,
      tagfunc: function(tag) {
        return targetUrl.format({
          tag: encodeURIComponent(tag)
        });
      }
    });
  }).catch((err) => {
    alert(err);
  });
}

function navigateToNews(sender) {
  var url = sender.getAttribute("data-url");

  if (window.innerWidth < 992) {
    newsPage(url);
    return false;
  }

  var apiUrl = "/api/resources/feed?url=" + encodeURIComponent(url);
  var options = {
    focus: true,
    backdrop: true,
  };

  axios.get(apiUrl).then((response) => {
    var feed = response.data;

    document.getElementById("modal").classList.add("modal-diallog-scrollable");

    window.modal = new bootstrap.Modal(
      document.getElementById("modal"),
      options,
    );
    document.querySelector("#modalLabel").innerHTML = "News";
    document.querySelector("#modalBody").innerHTML = app.templates.news(feed);
    window.modal.show();
  });
}

function viewWeather(lat, long, days, index) {
  var options = {
    focus: true,
    backdrop: "static",
  };
  ui()
    .weather({
      latitude: lat,
      longitude: long,
      days: days,
    })
    .then((data) => {
      window.modal = new bootstrap.Modal(
        document.getElementById("modal"),
        options,
      );

      var result = {};
      document.querySelector("#modalLabel").innerHTML = "Weather";
      if (index && index >= 0) {
        result = data.weather[index];
      } else {
        result = data.weather[0];
      }
      document
        .getElementById("modal")
        .classList.remove("modal-diallog-scrollable");
      result.location = data.location;
      document.querySelector("#modalBody").innerHTML =
        app.templates.weather(result);

      window.modal.show();
    })
    .catch((err) => {
      alert(err);
    });
}

function navigateTo(target) {
  const openErrorDialog = function() {
    ui().messageBox({
      label: "Service Error",
      body: "Sorry, this service is not available. It maybe down or offline."
    });
  };

  var name = target.getAttribute("data-name");
  var url = target.getAttribute("data-url");
  if (name) {
    var apiUrl = "/api/docker/container/" + encodeURIComponent(name) + "/available";
    axios.get(apiUrl).then((response) => {
      if (response.data.available) {
        window.open(url);
      } else {
        openErrorDialog();
      }
    }).catch((err) => {
      openErrorDialog();
    });
  } else {
    window.open(url);
  }
}

function _desktop() {
  var d = JSON.parse(localStorage.getItem("desktop"));
  return d;
}

function setBackground() {
  var opt = _desktop().background;

  switch (opt.type) {
    case "none":
      break;
    case "daily":
      var apiUrl = "/api/resources/daily/" + opt.url;
      axios.get(apiUrl).then((response) => {
        var bg = response.data;
        if (bg != "") {
          document.body.style.backgroundImage = "url('" + bg + "')";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundAttachment = "fixed";
          document.body.style.backgroundSize = "cover";
          document.body.style.height = "100%";
          document.querySelector("html").style.height = "100%";
          if (opt.image) {
            var bgfilter = opt.image.filter ?? "";
            if (bgfilter != "") {
              document.body.style.filter = bgfilter;
            }
          }
        }
      });
      break;
    case "image":
      document.body.style.backgroundImage = "url('" + opt.url + "')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundSize = "cover";
      document.body.style.height = "100%";
      document.querySelector("html").style.height = "100%";
      if (opt.image) {
        var bgfilter = opt.image.filter ?? "";
        if (bgfilter != "") {
          document.body.style.filter = bgfilter;
        }
      }
      break;
    case "bgcolor":
      document.body.style.backgroundColor = opt.bgcolor;
      break;
    case "filter":
      document.body.style.backgroundImage = opt.filter;
      break;
  }
}

function saveConfiguration() {
  var data = {
    containerName: document.getElementById("txtcontainerName").value,
    hostname: document.getElementById("txthostname").value,
    name: document.getElementById("txtname").value,
    proxy: document.getElementById("txtproxy").value,
    public: document.getElementById("txtpublic").value,
    iconSlug: document.getElementById("txticonSlug").value,
    iconCatalog: document.getElementById("txticonCatalog").value,
    archived: document.querySelector("#chkArchived").checked,
  };
  var compose = document.getElementById("yamlEdit").view.state.doc;
  var project = {
    compose: compose,
    env: document.getElementById("txtEnv").value,
    changed: document.getElementById("changed").value,
    projectName: document
      .getElementById("txtCompose")
      .getAttribute("data-project"),
  };
  var changed = document.getElementById("changed").value;

  axios
    .post(
      "/api/discovery/definition/" + encodeURIComponent(data.containerName),
      data,
    )
    .then((response) => {
      axios
        .post(
          "/api/discovery/project/definition/" + encodeURIComponent(project.projectName),
          project,
        )
        .then((response) => {
          window.location.href = "/admin/index";
        })
        .catch((err) => {
          alert(err);
        });
    })
    .catch((err) => {
      alert(err);
    });
}

function composeEdit(sender) {
  var url =
    "/admin/edit?project=" +
    encodeURIComponent(sender.getAttribute("data-project")) +
    "&container=" +
    encodeURIComponent(sender.getAttribute("data-containerid"));
  window.location.href = url;
}

function iconSearch() {
  var options = {
    focus: true,
    backdrop: "static",
  };
  document.getElementById("iconSearchQuery").value = "";
  document.getElementById("iconSearchResults").innerHTML = "";
  document.getElementById("btnSearch").setAttribute("data-container", "");
  document.getElementById("btnSearch").setAttribute("data-action", "");
  window.iconSearchModal = new bootstrap.Modal(
    document.getElementById("iconSearchModal"),
    options,
  );
  ui("#iconSearchQuery").enterCheck({
    onEnterKey: performIconSearch
  });
  window.iconSearchModal.show();
  document.getElementById("iconSearchQuery").focus();
}

function performIconSearch() {
  var iconSearchQuery = document.querySelector("#iconSearchQuery").value;
  var apiUrl = "/api/icons/search/" + encodeURIComponent(iconSearchQuery);
  var iconSearchResults = document.querySelector("#iconSearchResults");
  var container = document
    .getElementById("btnSearch")
    .getAttribute("data-container");
  var jscmd = document.getElementById("btnSearch").getAttribute("data-action");

  axios
    .get(apiUrl)
    .then((response) => {
      iconSearchResults.innerHTML = "";
      var html = '<table cellpadding="5" cellspacing="0" border="0">';
      response.data.forEach((icon) => {
        if (cmd == "") {
          html +=
            '<tr><td><img src="' +
            icon.url +
            '" data-catalog="' +
            icon.catalog +
            '" data-slug="' +
            icon.slug +
            '" style="width:64px;max-height:64px;" /></td><td><code>' +
            icon.url +
            "</code><br>Catalog: " +
            icon.catalog +
            "<br>Slug: " +
            icon.slug +
            "</td></tr>";
        } else {
          var cmd =
            jscmd +
            "('" +
            container +
            "', '" +
            icon.catalog +
            "', '" +
            icon.slug +
            "')";
          html +=
            '<tr><td><a href="#" onclick="' +
            cmd +
            '; return false;"><img src="' +
            icon.url +
            '" data-catalog="' +
            icon.catalog +
            '" data-slug="' +
            icon.slug +
            '" style="width:64px;max-height:64px;" /></a></td><td><code>' +
            icon.url +
            "</code><br>Catalog: " +
            icon.catalog +
            "<br>Slug: " +
            icon.slug +
            "</td></tr>";
        }
      });
      iconSearchResults.innerHTML = html + "</table>";
    })
    .catch((err) => {});
}

function composerise() {
  document.querySelector("#nav-compose-tab").click();
}

function doDeComposerise(src, target) {
  var txtRun = document.querySelector(src);
  var txtCompose = document.querySelector(target);
  var data = {
    cmd: document.getElementById("yamlEdit").view.state.doc,
  };
  axios
    .post("/api/compose/decomposerize", data)
    .then((response) => {
      txtCompose.value = response.data;
    })
    .catch((error) => {
      txtCompose.value = JSON.stringify(error);
    });
}

function doComposerise(src, target) {
  var txtRun = document.querySelector(src);
  var txtCompose = document.querySelector(target);
  var yaml = document.getElementById("yamlEdit");
  var data = {
    cmd: txtRun.value,
  };

  axios
    .post("/api/compose/composerize", data)
    .then((response) => {
      txtCompose.value = response.data;
      let newState = cm6.createEditorState(response.data);
      yaml.view.setState(newState);
    })
    .catch((error) => {
      txtCompose.value = JSON.stringify(error);
    });
}

function scanDocker() {
  var apiUrl = "/api/discovery/scan";
  axios
    .get(apiUrl)
    .then((response) => {
      ui().messageBox({
        label: "Scan",
        body: "Service Discovery complete.",
      });
    })
    .catch((err) => {
      alert(err);
    });
}


function changeIcon(target, action) {
  var name = target.getAttribute("data-containerid");
  var apiUrl = "/api/discovery/definition/" + encodeURIComponent(name);

  axios
    .get(apiUrl)
    .then((response) => {
      var options = {
        focus: true,
        backdrop: "static",
      };
      document.getElementById("btnSearch").setAttribute("data-container", name);
      document
        .getElementById("btnSearch")
        .setAttribute("data-action", "saveChangeIcon");

      if (action) {
        document
          .getElementById("btnSearch")
          .setAttribute("data-action", action);
      }

      window.iconSearchModal = new bootstrap.Modal(
        document.getElementById("iconSearchModal"),
        options,
      );
      document.getElementById("iconSearchQuery").value = "";
      document.getElementById("iconSearchResults").innerHTML = "";
      if (response.data && response.data.length > 0) {
        if (response.data[0].iconSlug) {
          document.getElementById("iconSearchQuery").value =
            response.data[0].iconSlug;
          if (response.data[0].iconSlug != "") {
            performIconSearch();
          }
        }
      }
      ui("#iconSearchQuery").enterCheck({
        onEnterKey: performIconSearch
      });
      document.getElementById("btnSearch").setAttribute("data-container", name);
      window.iconSearchModal.show();
      document.getElementById("iconSearchQuery").focus();
    })
    .catch((err) => {
      alert(err);
    });
}

function saveChangeIcon(name, catalog, slug) {
  var apiUrl =
    "/api/discovery/changeicon/" +
    encodeURIComponent(name) +
    "?catalog=" +
    encodeURIComponent(catalog) +
    "&slug=" +
    encodeURIComponent(slug);
  axios
    .get(apiUrl)
    .then((response) => {
      document.getElementById("btnSearch").setAttribute("data-action", "");
      window.iconSearchModal.hide();
    })
    .catch((err) => {
      alert(err);
    });
}

function getSeries(source, field) {
  var result = [];
  var index = 0;

  source[field].forEach((s) => {
    result.push(s * 100);
    index += 1;
  });

  return result;
}

function getAxisLabel(source, field) {
  var result = [];
  var index = 0;
  source[field].forEach((s) => {
    result.push(new Date(source.periods[index]).getTime());
    index += 1;
  });

  return result;
}

function getLog(id) {
  var apiUrl = "/api/docker/container/logs/" + id;
  axios
    .get(apiUrl)
    .then((response) => {
      document.getElementById("containerLogs").innerHTML = response.data;
    })
    .catch((err) => {});
}

function renderDashboard(id) {
  var apiUrl = "/api/docker/dashboard/" + id;
  getLog(id);
  document.querySelector("#monitorContainerName").innerHTML = id;
  axios
    .get(apiUrl)
    .then((response) => {
      const memorychart = function() {
        var options = {
          xAxis: {
            type: 'category',
            data: getAxisLabel(response.data, "periods")
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: getSeries(response.data, "memoryFreePercent"),
            type: 'line',
            smooth: true
          }]
        };

        var chartDom = document.getElementById("memorychart");
        var myChart = echarts.init(chartDom);
        myChart.setOption(options);
      }


      const cpuchart = function() {
        var options = {
          xAxis: {
            type: 'category',
            data: getAxisLabel(response.data, "periods")
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: getSeries(response.data, "cpuPercent"),
            type: 'line',
            smooth: true
          }]
        };

        var chartDom = document.getElementById("cpuchart");
        var myChart = echarts.init(chartDom);
        myChart.setOption(options);
      }

      cpuchart();
      memorychart();
      window._monitor = setTimeout(async () => {
        renderDashboard(id);
      }, 5 * 60000);
    })
    .catch((err) => {
      alert(err);
    });
}

function startContainerMonitor(target) {
  var containerId = target.getAttribute("data-containerid");
  window.containerInfoModal.hide();
  document.querySelector("#nav-monitor-tab").click();
  if (window._monitor) {
    clearTimeout(window._monitor);
    window._monitor = null;
  }

  renderDashboard(containerId);
}

function containerInfo(sender) {
  var options = {
    focus: true,
    backdrop: "static",
  };
  var containerId = sender.getAttribute("data-containerid");

  ui("#containerInfo")
    .template({
      query: {
        id: containerId,
      },
    })
    .then(() => {
      window.containerInfoModal = new bootstrap.Modal(
        document.getElementById("containerInfoModal"),
        options,
      );
      window.containerInfoModal.show();

      const matches = document.querySelectorAll("[data-command]");
      if (matches) {
        matches.forEach((cmd) => {
          cmd.onclick = function() {
            var apiUrl =
              "/api/docker/" +
              this.getAttribute("data-command").replace("-", "/") +
              "/" +
              this.getAttribute("data-containerid");
            axios
              .get(apiUrl)
              .then((response) => {})
              .catch((err) => {});
          };
        });
      }
    });
}

function updateEditForm(name, catalog, slug) {
  document.getElementById("txticonSlug").value = slug;
  document.getElementById("txticonCatalog").value = catalog;

  var apiUrl =
    "/api/icons/r/" +
    encodeURIComponent(catalog) +
    "/" +
    encodeURIComponent(slug);

  axios
    .get(apiUrl)
    .then((response) => {
      document.getElementById("imgIcon").src = response.data;
      window.iconSearchModal.hide();
    })
    .catch((err) => {
      alert(err);
    });
}

function changeIconFromEdit() {
  var iconCatalog = document.getElementById("txticonCatalog").value;
  var iconSlug = document.getElementById("txticonSlug").value;
  var options = {
    focus: true,
    backdrop: "static",
  };
  document.getElementById("btnSearch").setAttribute("data-container", name);
  document
    .getElementById("btnSearch")
    .setAttribute("data-action", "updateEditForm");

  window.iconSearchModal = new bootstrap.Modal(
    document.getElementById("iconSearchModal"),
    options,
  );
  document.getElementById("iconSearchQuery").value = "";
  document.getElementById("iconSearchResults").innerHTML = "";
  if (iconSlug != "") {
    document.getElementById("iconSearchQuery").value = iconSlug;
    if (iconSlug != "") {
      performIconSearch();
    }
  }
  ui("#iconSearchQuery").enterCheck({
    onEnterKey: performIconSearch
  });
  document.getElementById("btnSearch").setAttribute("data-container", name);
  window.iconSearchModal.show();
  document.getElementById("iconSearchQuery").focus();
}
