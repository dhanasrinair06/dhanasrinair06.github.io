// Per-post "like" button backed by the free, no-signup abacus counter service.
// Each visitor can like a post once per browser (tracked via localStorage).
(function () {
  var BASE = "https://abacus.jasoncameron.dev";

  function initLikeButtons() {
    var boxes = document.querySelectorAll(".reglens-like");
    Array.prototype.forEach.call(boxes, function (box) {
      var ns = box.getAttribute("data-like-namespace");
      var key = box.getAttribute("data-like-key");
      var btn = box.querySelector(".like-btn");
      var countEl = box.querySelector(".like-count");
      var icon = btn.querySelector("i");
      var storageKey = "liked:" + ns + ":" + key;

      function showCount(n) {
        if (typeof n === "number") countEl.textContent = n;
      }
      function markLiked() {
        btn.classList.add("liked");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      }

      // Read the current like count without incrementing.
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
        markLiked();
      }

      btn.addEventListener("click", function () {
        if (localStorage.getItem(storageKey)) return; // one like per browser
        fetch(BASE + "/hit/" + ns + "/" + key)
          .then(function (r) {
            return r.json();
          })
          .then(function (d) {
            showCount((d && d.value) || 0);
            localStorage.setItem(storageKey, "1");
            markLiked();
          })
          .catch(function () {});
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLikeButtons);
  } else {
    initLikeButtons();
  }
})();
