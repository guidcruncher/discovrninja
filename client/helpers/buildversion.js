module.exports = (Handlebars) => {
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
