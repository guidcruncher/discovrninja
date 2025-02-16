function lintCompose(src, target, autofix, editor) {
  const formatter = ((results) => {
    let output = '';
    let errorCount = 0;
    let warningCount = 0;
    let fixableErrorCount = 0;
    let fixableWarningCount = 0;

    results.forEach((result) => {
      if (result.messages.length === 0) {
        return;
      }

      result.messages.forEach((message) => {
        const {
          type
        } = message;
        const color = type === 'error' ? "text-danger" : "text-warning";
        const line = message.line.toString().padStart(4, ' ');
        const column = message.column.toString().padEnd(4, ' ');

        const position = `<span class="text-body-tertiary">${line}:${column}</span>`
        const formattedType = '<span class="' + color + '">';
        const ruleInfo = '<span class="text-body-tertiay">' + message.rule + '</span>';

        output += `<div>${position}  ${formattedType}  ${message.message}</span>  ${ruleInfo}</div>`;

        if (type === 'error') {
          errorCount += 1;
          if (message.fixable) {
            fixableErrorCount += 1;
          }
        } else {
          warningCount += 1;
          if (message.fixable) {
            fixableWarningCount += 1;
          }
        }
      });
    });

    return output;
  });

  var data = {
    compose: document.getElementById(src).value,
    autofix: autofix
  };

  if (editor) {
    data.compose = document.getElementById(editor).view.state.doc.toString();
  }

  var ctl = document.getElementById(target);
  ctl.innerHTML = "";

  axios.post("/api/compose/lint", data).then((response) => {
    var results = response.data;
    ctl.innerHTML = formatter(results.results);
    if (editor) {
      document.getElementById(src).value = results.content;
      var cm6Editor = document.getElementById(editor);
      const getTheme = () => document.documentElement.getAttribute('data-bs-theme');
      var theme = getTheme();
      const newState = cm6.createEditorState(results.content, {
        dark: (theme == "dark")
      });
      cm6Editor.view.setState(newState);
    }
  }).catch((err) => {
    if (console) {
      console.log("ERROR", err);
    }
  });
}

function checkForImageUpdates() {

  const checkImage = ((obj) => {
    var image = $(obj).attr("data-imageid");
    var container = $(obj).attr("data-containerid");
    var project = $(obj).attr("data=project");
    var apiUrl = "/api/docker/image/update/check?ref=" + encodeURIComponent(image);
    if (image != "") {
      $(obj).html('<i class="fa-solid fa-hourglass-half"></i>');

      axios.get(apiUrl).then((response) => {
        var result = response.data;
        if (result.updateAvailable) {
          $(obj).html('<i title="Update available" class="text-warning fa-solid fa-download"></i>');
        } else {
          $(obj).html('<i title="Up-to-date" class="text-success fa-regular fa-circle-check"></i>');
        }
      }).catch((err) => {
        $(obj).html('<i title="Update state unknown" class="text-danger-emphasis fa-regular fa-circle-question"></i>');
      });
    }
  });

  $(".updatecheck").each((i, obj) => {
    checkImage(obj);
  });
}

function loadPlaylist(url, ch, vid, cb) {
  var apiUrl = "/api/resources/playlist";
  axios.post(apiUrl, {
    playlist: url
  }).then((response) => {
    var pl = response.data;
    $(ch).empty();

    for (a in ch.options) {
      ch.options.remove(0);
    }
    ch.add(new Option("", ""));
    pl.forEach((item) => {
      const option = new Option(item.title, item.url);
      ch.add(option);
    });
    ch.selectedIndex = 0;
    cb(pl);
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function changeVideo(sender) {
  var id = sender.getAttribute("data-id");
  var ch = document.getElementById("ch_" + id);
  var vid = document.getElementById("vid_" + id);
  if (ch.value != "") {
    var html = '<video preload="auto" class="mw-100" controls="controls" autoplay="autoplay"><source src="' + ch.value + '" type="video/mp4"></video>';
    $(vid).html(html);
  }
}


function saveVolume() {
  var id = document.getElementById("volumeid").value;
  const updateValues = ((vol) => {
    vol.Id = document.getElementById("volumeid").value;
    vol.Name = document.getElementById("name").value;
    vol.Driver = document.getElementById("driver").value;
    vol.CustomMountpoint = "";
    vol.CreatedAt = new Date();
    if (document.getElementById("mountPoint").value == "custom") {
      vol.CustomMountpoint = document.getElementById("customMountPoint").value;
    }
    vol.Options = {};
    var i = 0;
    while (document.getElementById("optionname_" + i)) {
      var key = document.getElementById("optionname_" + i).value;
      var value = document.getElementById("optionvalue_" + i).value;
      vol.Options[key] = value;
      i = i + 1;
    }

    if (!vol.Labels) {
      vol.Labels = {};
    }

    delete vol.Labels["discovrninja_excludebackup"];
    delete vol.Labels["noprune"];

    if (document.getElementById("excludebackup").checked) {
      vol.Labels["discovrninja_excludebackup"] = "true";
    }
    if (document.getElementById("noprune").checked) {
      vol.Labels["noprune"] = "true";
    }

    return vol;
  });
  var apiUrl = "/api/docker/storage/" + encodeURIComponent(id);

  var vol = {};
  if (id == "") {
    vol = updateValues(vol);
    vol.Id = vol.Name;
    id = vol.Id;
    document.getElementById("volumeid").value = vol.Id;
    apiUrl = "/api/docker/storage/update";
    axios.post(apiUrl, vol).then((saveResponse) => {
      showVolumeScript(id, true);
    }).catch((err) => {
      if (console) {
        console.log("ERROR ", err);
      }
    });
  } else {
    axios.get(apiUrl).then((response) => {
      vol = response.data;
      vol = updateValues(vol);
      apiUrl = "/api/docker/storage/update";
      axios.post(apiUrl, vol).then((saveResponse) => {
        showVolumeScript(id, true);
      }).catch((err) => {
        if (console) {
          console.log("ERROR ", err);
        }
      });
    }).catch((err) => {
      if (console) {
        console.log("ERROR ", err);
      }
    });
  }
}

function showVolumeScript(id, preferdb) {
  var apiUrl = "/api/docker/storage/volume/" + encodeURIComponent(id) + "/script?preferdb=false";

  if (preferdb) {
    apiUrl = "/api/docker/storage/volume/" + encodeURIComponent(id) + "/script?preferdb=true";
  }

  axios.get(apiUrl).then((response) => {
    var scr = response.data;
    document.getElementById("script").innerHTML = '# Delete old  Volume \n' + (scr.delete ?? []).join('\n') + '\n\n# Create new Volume\n' + (scr.create ?? []).join(' \\\n');
    const myModal = new bootstrap.Modal(document.getElementById('scriptModal'), {})
    myModal.show();
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function getVolumeScript(preferDb, cbFunc, errFunc) {
  var id = document.getElementById("volumeid").value;
  if (id == "") {
    id = document.getElementById("name").value;
  }

  var apiUrl = "/api/docker/storage/volume/" + encodeURIComponent(id) + "/script";
  if (preferDb) {
    apiUrl += "?preferdb=yes";
  }
  axios.get(apiUrl).then((response) => {
    var scr = response.data;
    cbFunc(scr);
  }).catch((err) => {
    errFunc(err);
  });

}

function getNetwork(id) {
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id);
  axios.get(apiUrl).then((response) => {
    var network = response.data;
    document.getElementById("driver").value = network.Driver;
    for (var i = 0; i < network.IPAM.Config.length; i++) {
      document.getElementById("ipsubnet" + i).value = network.IPAM.Config[i].Subnet ?? "";
      document.getElementById("iprange" + i).value = network.IPAM.Config[i].IPRange ?? "";
      document.getElementById("ipgateway" + i).value = network.IPAM.Config[i].Gateway ?? "";
    }
    document.getElementById("internal").checked = network.Internal;
    document.getElementById("enableipv6").checked = network.EnableIPv6;
    if (network.Labels["noprume"]) {
      document.getElementById("noprune").checked = (net.Labels["noprune"] == "true");
    }
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function deleteNetwork(id) {
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/delete";
  axios.get(apiUrl).then((response) => {
    window.location.href = "/admin/network";
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function deleteVolume(id) {
  var apiUrl = "/api/docker/volume/" + encodeURIComponent(id) + "/delete";
  axios.get(apiUrl).then((response) => {
    window.location.href = "/admin/storage";
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function showNetworkScript(id, preferdb) {
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/script?preferdb=false";

  if (preferdb) {
    apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/script?preferdb=true";
  }

  axios.get(apiUrl).then((response) => {
    var scr = response.data;
    document.getElementById("script").innerHTML = '# Detach containers\n' + (scr.detach ?? []).join('\n') + '\n\n# Delete old network \n' + (scr.delete ?? []).join('\n') + '\n\n# Create new network\n' + (scr.create ?? []).join(' \\\n') + '\n\n# Reattach containers\n' + (scr.attach ?? []).join('\n');
    const myModal = new bootstrap.Modal(document.getElementById('scriptModal'), {})
    myModal.show();
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}


function getNetworkScript(preferDb, cbFunc, errFunc) {
  var id = document.getElementById("networkid").value;
  if (id == "") {
    id = document.getElementById("name").value;
  }

  var apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/script";
  if (preferDb) {
    apiUrl += "?preferdb=yes";
  }
  axios.get(apiUrl).then((response) => {
    var scr = response.data;
    cbFunc(scr);
  }).catch((err) => {
    errFunc(err);
  });

}

function saveNetwork() {
  var id = document.getElementById("networkid").value;
  const updateValues = ((net) => {
    net.Id = document.getElementById("networkid").value;
    if (!net.Scope) {
      net.Scope = "local";
    }
    net.Name = document.getElementById("name").value;
    net.Driver = document.getElementById("driver").value;
    net.IPAM.Config = [];
    if (net.Attachable == null) {
      net.Attachable = false;
    }
    if (net.Ingress == null) {
      net.Ingress = false;
    }
    if (!net.IPAM.Driver) {
      net.IPAM.Driver = "default";
    }
    var i = 0;
    while (document.getElementById("ipsubnet" + i)) {
      var ipa = {
        Subnet: document.getElementById("ipsubnet" + i).value,
        IPRange: document.getElementById("iprange" + i).value,
        Gateway: document.getElementById("ipgateway" + i).value
      };
      net.IPAM.Config.push(ipa);
      i = i + 1;
    }

    net.Internal = document.getElementById("internal").checked;
    net.EnableIPv6 = document.getElementById("enableipv6").checked;
    if (!net.Labels) {
      net.Labels = {};
    }
    delete net.Labels["noprune"];
    if (document.getElementById("noprune").checked) {
      net.Labels["noprune"] = "true";
    }
    return net;
  });

  if (id != "") {
    var apiUrl = "/api/docker/network/" + encodeURIComponent(id);
    axios.get(apiUrl).then((response) => {
      var network = response.data;
      network = updateValues(network);
      apiUrl = "/api/docker/network/update/" + encodeURIComponent(id);
      axios.post(apiUrl, network).then((saveResponse) => {

        getNetworkScript(true, ((scr) => {

          document.getElementById("script").innerHTML = '# Detach containers\n' + scr.detach.join('\n') + '\n\n# Delete old network \n' + scr.delete.join('\n') + '\n\n# Create new network\n' + scr.create.join(' \\\n') + '\n\n# Reattach containers\n' + scr.attach.join('\n');
          const myModal = new bootstrap.Modal(document.getElementById('scriptModal'), {})
          myModal.show();

        }), ((err) => {
          if (console) {
            console.log("ERROR ", err);
          }
        }));
      }).catch((err) => {
        if (console) {
          console.log("ERROR ", err);
        }
      });
    }).catch((err) => {
      if (console) {
        console.log("ERROR ", err);
      }
    });

  } else {
    var network = {
      IPAM: {
        Config: {}
      }
    };
    network = updateValues(network);
    var apiUrl = apiUrl = "/api/docker/network/create";
    axios.post(apiUrl, network).then((saveResponse) => {

      getNetworkScript(true, ((scr) => {
        document.getElementById("script").innerHTML = '# Detach containers\n' + scr.detach.join('\n') + '\n\n# Delete old network \n' + scr.delete.join('\n') + '\n\n# Create new network\n' + scr.create.join(' \\\n') + '\n\n# Reattach containers\n' + scr.attach.join('\n');
        const myModal = new bootstrap.Modal(document.getElementById('scriptModal'), {})
        myModal.show();
      }), ((err) => {
        if (console) {
          console.log("ERROR ", err);
        }
      }));
    }).catch((err) => {
      if (console) {
        console.log("ERROR ", err);
      }
    });
  }
}



function deleteStack(container) {
  var apiUrl = "/api/docker/delete/" + encodeURIComponent(container);
  axios.get(apiUrl).then((response) => {
    window.location.href = "/admin/index?tab=1";
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function toggleWait(ctl) {
  $(ctl).find(".wait").toggleClass("wait-show");
}

function runTask(name, btn) {
  toggleWait(btn);
  var apiUrl = "/api/task/" + encodeURIComponent(name);
  axios.get(apiUrl).then((response) => {
    toggleWait(btn);
    ui().messageBox({
      label: "Task",
      body: "Task run was completed.",
    });
  }).catch((err) => {
    toggleWait(btn);
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function updateIconCache(btn) {
  toggleWait(btn);
  var apiUrl = "/api/icons/cdn/update";
  axios.get(apiUrl).then((response) => {
    toggleWait(btn);
    ui().messageBox({
      label: "Icon Cache",
      body: "Icon Cache refresh complete.",
    });
  }).catch((err) => {
    toggleWait(btn);
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function logout() {
  window.location.href = "/auth/logout";
}

function admin() {
  window.location.href = "/admin/index?tab=0";
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
    if (console) {
      console.log("ERROR ", err);
    }
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
      if (console) {
        console.log("ERROR ", err);
      }
    });
}

function resetCatalog() {
  document.getElementById("filter").value = "";
  document.getElementById("category").value = "";
  document.getElementById("category").selectedIndex = 0;
}

function viewCatalog() {
  var id = document.getElementById("templates").value;
  var filter = document.getElementById("filter").value;
  var category = document.getElementById("category").value;
  if (id != "") {
    window.location.href = "/admin/catalog?id=" + encodeURIComponent(id) + "&category=" + encodeURIComponent(category) + "&filter=" + encodeURIComponent(filter);
  }
}

function filterCatalog(id, filter) {
  var category = document.getElementById("category").value;
  window.location.href = "/admin/catalog?id=" + encodeURIComponent(id) + "&category=" + encodeURIComponent(category) + "&filter=" + encodeURIComponent(filter);
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

function tagCloud(id, func) {
  var apiUrl = "/api/external/linkding/tags/count";

  axios.get(apiUrl).then((response) => {
    var feed = response.data;
    document.getElementById(id).tagfunc = func;
    document.getElementById(id).innerHTML = app.templates.tagcloud({
      Id: id,
      feed: feed
    });
  }).catch((err) => {
    if (console) {
      console.log("ERROR ", err);
    }
  });
}

function dialog(title, html) {

  var options = {
    focus: true,
    backdrop: true,
  };
  document.getElementById("modal-prop").classList.add("modal-dialog-scrollable");
  document.getElementById("modal-prop").classList.add("modal-fullscreen");
  window.modal = new bootstrap.Modal(
    document.getElementById("modal"),
    options,
  );
  document.querySelector("#modalLabel").innerHTML = title;
  document.querySelector("#modalBody").innerHTML = html;
  window.modal.show();
}

function navigateToNews(sender) {
  var url = sender.getAttribute("data-url");

  /*
    if (window.innerWidth < 992) {
      newsPage(url);
      return false;
    }
  */

  var apiUrl = "/api/resources/feed?url=" + encodeURIComponent(url);
  axios.get(apiUrl).then((response) => {
    var feed = response.data;
    dialog("News", app.templates.news(feed));
  });
}

function viewBookmarks(tag) {
  var apiUrl = "/api/external/linkding/bookmarks?tag=" + encodeURIComponent(tag);
  axios.get(apiUrl).then((response) => {
    var feed = response.data.results;
    dialog("Bookmarks - " + tag, app.templates.bookmarkslist(feed));
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
      document.getElementById("modal-prop").classList.remove("modal-fullscreen");
      document
        .getElementById("modal-prop")
        .classList.remove("modal-diallog-scrollable");
      result.location = data.location;
      document.querySelector("#modalBody").innerHTML =
        app.templates.weather(result);

      window.modal.show();
    })
    .catch((err) => {
      if (console) {
        console.log("ERROR ", err);
      }
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
    document.getElementById("loader").href = url;
    document.getElementById("loader").click();
    //window.open(url);
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
    monitor: document.querySelector("#monitor").checked,
    uptime: document.querySelector("#uptime").checked,
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
          window.location.href = "/admin/index?tab=1";
        })
        .catch((err) => {
          if (console) {
            console.log("ERROR ", err);
          }
        });
    })
    .catch((err) => {
      if (console) {
        console.log("ERROR ", err);
      }
    });
}

function composeEdit(sender, tab) {
  var url =
    "/admin/edit?project=" +
    encodeURIComponent(sender.getAttribute("data-project")) +
    "&container=" +
    encodeURIComponent(sender.getAttribute("data-containerid")) + "&tab=" + (tab ?? 1);
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
  window.location.href = "/admin/compose";
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

function scanDocker(btn) {

  toggleWait(btn);
  var apiUrl = "/api/discovery/scan";
  axios
    .get(apiUrl)
    .then((response) => {
      toggleWait(btn);
      ui().messageBox({
        label: "Scan",
        body: "Service Discovery complete.",
      });
    })
    .catch((err) => {
      toggleWait(btn);
      if (console) {
        console.log("ERROR ", err);
      }
    });
}

function pruneDocker(btn) {

  toggleWait(btn);
  var apiUrl = "/api/docker/prune";
  axios
    .get(apiUrl)
    .then((response) => {
      toggleWait(btn);
      ui().messageBox({
        label: "Prune",
        body: "Docker prune comlete.",
      });
    })
    .catch((err) => {
      toggleWait(btn);
      if (console) {
        console.log("ERROR ", err);
      }
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
      if (console) {
        console.log("ERROR ", err);
      }
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
      if (console) {
        console.log("ERROR ", err);
      }
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
      if (console) {
        console.log("ERROR ", err);
      }
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
