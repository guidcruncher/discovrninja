function doSearch(ctl) {
  var q = document.querySelector(ctl).value;
  window.open("https://html.duckduckgo.com/html?q=" + encodeURIComponent(q));
}

function newsPage(url) {
  window.open("/news?url=" + encodeURIComponent(url));
}

function navigateToNews(sender) {
  var url = sender.getAttribute("data-url");
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
  var name = target.getAttribute("data-name");
  var url = target.getAttribute("data-url");
  window.open(url);
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
  var project = {
    compose: document.getElementById("txtCompose").value,
    env: document.getElementById("txtEnv").value,
    projectName: document
      .getElementById("txtCompose")
      .getAttribute("data-project"),
  };

  axios
    .post(
      "/api/discovery/definition/" + encodeURIComponent(data.containerName),
      data,
    )
    .then((response) => {
      window.location.href = "/admin/index";
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
    cmd: txtRun.value,
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
  var data = {
    cmd: txtRun.value,
  };

  axios
    .post("/api/compose/composerize", data)
    .then((response) => (txtCompose.value = response.data))
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
    result.push({
      x: new Date(source.periods[index]).getTime(),
      y: s,
    });
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
      function memorychart() {
        var options = {
          chart: {
            height: 300,
            width: 320,
            type: "line",
          },
          title: {
            text: "Historical Free Memory %",
          },
          stroke: {
            curve: "smooth",
          },
          markers: {
            size: 5,
          },
          series: [{
            name: "Load",
            data: getSeries(response.data, "memoryFreePercent"),
          }, ],
          xaxis: {
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              formatter: function(val) {
                return Number(val).toLocaleString(undefined, {
                  style: "percent",
                  minimumFractionDigits: 4,
                });
              },
            },
          },
        };

        var memoryChart = new ApexCharts(
          document.querySelector("#memorychart"),
          options,
        );
        memoryChart.render();
      }

      function cpuchart() {
        var options = {
          chart: {
            height: 300,
            width: 320,
            type: "line",
          },
          title: {
            text: "Historical CPU Load %",
          },
          stroke: {
            curve: "smooth",
          },
          markers: {
            size: 5,
          },
          series: [{
            name: "Load",
            data: getSeries(response.data, "cpuPercent"),
          }, ],
          xaxis: {
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              formatter: function(val) {
                return Number(val).toLocaleString(undefined, {
                  style: "percent",
                  minimumFractionDigits: 0,
                });
              },
            },
          },
        };

        var cpuChart = new ApexCharts(
          document.querySelector("#cpuchart"),
          options,
        );
        cpuChart.render();
      }
      cpuchart();
      memorychart();
      window._monitor = setTimeout(async () => {
        renderDashboard(id);
      }, 5 * 60000);
    })
    .catch((err) => {});
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
