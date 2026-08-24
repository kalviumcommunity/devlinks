// BUG (issue #9): leftover debug log should be removed
console.log("debug: script loaded");

// BUG (issue #6): the button id in the HTML is "copy-btn", but this looks for "copyBtn",
// so the copy button does nothing.
const btn = document.getElementById("copyBtn");
if (btn) {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    btn.textContent = "Copied!";
  });
}
