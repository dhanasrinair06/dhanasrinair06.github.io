// No-login emoji reactions for posts, backed by the free abacus counter service.
// Each visitor can add each reaction once per browser (tracked via localStorage).
(function () {
  var BASE = "https://abacus.jasoncameron.dev";

  function initReactions() {
    var bars = document.querySelectorAll(".reglens-reactions");
    Array.prototype.forEach.call(bars, function (bar) {
      var ns = bar.getAttribute("data-reactions-namespace");
      var baseKey = bar.getAttribute("data-reactions-key");
      var btns = bar.querySelectorAll(".reaction-btn");

      Array.prototype.forEach.call(btns, function (btn) {
        var emoji = btn.getAttribute("data-emoji");
        var key = baseKey + "-" + emoji;
        var countEl = btn.querySelector(".reaction-count");
        var storageKey = "reacted:" + ns + ":" + key;

        function showCount(n) {
          countEl.textContent = typeof n === "number" ? n : 0;
        }

        // Read current count without incrementing.
        fetch(BASE + "/get/" + ns + "/" + key)
          .then(function (r) {
            return r.ok ? r.json() : { value: 0 };
          })
          .then(function (d) {
            showCount((d && d.value) || 0);
          })
          .catch(function () {
            showCount(0);
          });

        if (localStorage.getItem(storageKey)) {
          btn.classList.add("reacted");
        }

        btn.addEventListener("click", function () {
          if (localStorage.getItem(storageKey)) return; // one per browser
          fetch(BASE + "/hit/" + ns + "/" + key)
            .then(function (r) {
              return r.json();
            })
            .then(function (d) {
              showCount((d && d.value) || 0);
              localStorage.setItem(storageKey, "1");
              btn.classList.add("reacted");
            })
            .catch(function () {});
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReactions);
  } else {
    initReactions();
  }
})();
