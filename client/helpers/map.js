module.exports = (Handlebars) => {
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
