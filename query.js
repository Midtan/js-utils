// Serializes to PHP array notation
// Taken from https://stackoverflow.com/a/1714899/
serializeArrayNotation = function (obj, prefix) {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serializeArrayNotation(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
};

// Get the value of query parameters
getParameter = function (parameterName) {
  var href = location.href.replace(/\[\d*\]=/g, "=");
  var url = new URL(href);
  var params = url.searchParams.getAll(parameterName);
  if (params.length > 1) {
    return params;
  } else if (params.length === 1) {
    return params[0];
  } else {
    return null;
  }
};