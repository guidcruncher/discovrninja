module.exports = (Handlebars) => {
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
