// Site visitor counter.
// Increments ONCE per browser session (a "visit"), not on every page/subpage load.
// Uses the free, no-signup abacus counter service (https://abacus.jasoncameron.dev).
(function () {
  var NAMESPACE = "dhanasrinair06-github-io";
  var KEY = "site-visits";
  var BASE = "https://abacus.jasoncameron.dev";
  var SESSION_FLAG = "visitor-counted";

  function render(value) {
    var el = document.getElementById("visitor-count");
    if (!el) return;
    if (typeof value === "number") {
      el.textContent = value.toLocaleString();
    }
  }

  function initVisitorCounter() {
    if (!document.getElementById("visitor-count")) return;

    // Already counted this session -> just read the current total (no increment).
    var alreadyCounted = sessionStorage.getItem(SESSION_FLAG);
    var endpoint = alreadyCounted ? "/get/" : "/hit/";

    fetch(BASE + endpoint + NAMESPACE + "/" + KEY)
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (data) {
        if (data && typeof data.value === "number") {
          render(data.value);
          if (!alreadyCounted) {
            sessionStorage.setItem(SESSION_FLAG, "1");
          }
        }
      })
      .catch(function () {
        /* network/service issue: leave the placeholder as-is */
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVisitorCounter);
  } else {
    initVisitorCounter();
  }
})();
