// Copying is allowed — but anything substantial that leaves the page carries
// its source with it. Paste a paragraph elsewhere and the author's name and
// the page URL come along, so quoting turns into attribution by default.
//
// Short selections are left alone: copying a term to look it up shouldn't
// drag a credit line with it. Form fields are untouched.
(function () {
  var AUTHOR = "Dhanasri Nair";
  var MIN_CHARS = 80;
  var EDITABLE = "input, textarea, select, [contenteditable='true']";

  function selectionHtml(selection) {
    var container = document.createElement("div");
    for (var i = 0; i < selection.rangeCount; i++) {
      container.appendChild(selection.getRangeAt(i).cloneContents());
    }
    return container.innerHTML;
  }

  document.addEventListener("copy", function (e) {
    if (e.target && e.target.closest && e.target.closest(EDITABLE)) return;
    if (!e.clipboardData) return;

    var selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    var text = selection.toString();
    if (text.trim().length < MIN_CHARS) return;

    var url = window.location.href;
    var credit = "— " + AUTHOR + ", " + url;

    e.clipboardData.setData("text/plain", text + "\n\n" + credit);
    e.clipboardData.setData(
      "text/html",
      selectionHtml(selection) +
        '<p>— ' + AUTHOR + ', <a href="' + url + '">' + url + "</a></p>"
    );
    e.preventDefault();
  });
})();
