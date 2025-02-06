/* eslint-disable no-redeclare */

module.exports = (Handlebars) => {
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
