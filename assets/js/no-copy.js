// Deters casual copying of page content.
//
// This is a speed bump, not a lock: anything the browser renders can still be
// reached through view-source, reader mode, print-to-PDF or a disabled-JS
// session. It stops the ordinary select-and-copy path, which is what most
// scraping-by-hand looks like.
//
// Form fields stay fully usable, and links keep their right-click menu so
// "open in new tab" still works.
(function () {
  var EDITABLE = "input, textarea, select, [contenteditable='true']";

  function isEditable(node) {
    return node && node.closest && node.closest(EDITABLE);
  }

  function isLink(node) {
    return node && node.closest && node.closest("a");
  }

  ["copy", "cut", "dragstart"].forEach(function (type) {
    document.addEventListener(type, function (e) {
      if (isEditable(e.target)) return;
      e.preventDefault();
    });
  });

  document.addEventListener("contextmenu", function (e) {
    if (isEditable(e.target) || isLink(e.target)) return;
    e.preventDefault();
  });
})();
