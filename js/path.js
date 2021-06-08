module.exports = function pathway() {
  var path = window.location.pathname;
  if (path === "/search") {
    return "include headersigned";
  } else {
    return "include header";
  }
};
