module.exports = function pathway() {
  console.log("It's working! :D");
  var path = window.location.pathname;
  if (path === "/search") {
    return "include headersigned";
  } else {
    return "include header";
  }
};
